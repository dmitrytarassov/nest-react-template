import { Admin, Resource, CustomRoutes, fetchUtils } from 'react-admin';
import { Route } from 'react-router-dom';
import crudProvider from './crudProvider';
import RentalsList from '@admin/components/rentals/RentalsList';
import RentalAdd from '@admin/components/rentals/RentalAdd';
import * as reactAdmin from 'react-admin';
import RentalEdit from '@admin/components/rentals/RentalEdit';
import ProductsList from '@admin/components/products/ProductsList';
import ProductAdd from '@admin/components/products/ProductAdd';
import ProductEdit from '@frontend/admin/components/products/ProductEdit';
import RentalProductsList from '@frontend/admin/components/rental_products/RentalProductsList';
import RentalProductAdd from '@frontend/admin/components/rental_products/RentalProductAdd';
import RentalProductEdit from '@frontend/admin/components/rental_products/RentalProductEdit';
import dynamic from 'next/dynamic';
import PromotionsList from './components/promotions/PromotionsList';
import PromotionsAdd from './components/promotions/PromotionsAdd';
import PromotionsEdit from './components/promotions/PromotionsEdit';
import ProductsWithWeightList from '@admin/components/weight/ProductsWithWeightList';
import { Layout } from 'react-admin';
import { Menu } from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';

const httpClient = (url, options: { headers?: any } = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth') || '{}');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = crudProvider('/crud', httpClient);

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export const __dataProvider = async (type, resource, params) => {
  if (type === reactAdmin.CREATE || type === reactAdmin.UPDATE) {
    for (const paramName of Object.keys(params.data)) {
      if (Array.isArray(params.data[paramName])) {
        const data = [];
        for (const img of params.data[paramName]) {
          if (img.rawFile) {
            const pic = await convertFileToBase64(img);
            data.push(pic);
          } else if (typeof img === 'string') {
            data.push(img);
          }
        }
        params.data[paramName] = data;
      } else {
        if (params.data[paramName]?.rawFile instanceof File) {
          const img = params.data[paramName];
          if (img.rawFile) {
            const pic = await convertFileToBase64(img);
            params.data[paramName] = pic;
          } else if (typeof img === 'string') {
            params.data[paramName] = img;
          }
        }
      }
    }
    const response = await dataProvider(type, resource, params);

    return {
      ...response,
      data: {
        ...response.data,
        id: response.data._id,
      },
    };
  } else if (type === reactAdmin.GET_LIST) {
    const response = await dataProvider(type, resource, params);
    const data = response.data;

    return { ...response, data };
  }

  const response = await dataProvider(type, resource, params);

  if (type === reactAdmin.GET_MANY) {
    return response.data;
  }

  return response;
};

const MyMenu = () => (
  <Menu>
    {/*<Menu.DashboardItem />*/}
    <Menu.ResourceItem name="rental" />
    <Menu.ResourceItem name="product" />
    <Menu.ResourceItem name="rental_products" />
    <Menu.ResourceItem name="promotions" />
    <Menu.Item
      to="/products_with_weight"
      primaryText="Позиции с весом"
      leftIcon={<LabelIcon />}
    />
  </Menu>
);

const MyLayout = (props) => <Layout {...props} menu={MyMenu} />;

const App = () => {
  return (
    <Admin layout={MyLayout} dataProvider={__dataProvider}>
      <Resource
        name="rental"
        list={RentalsList}
        create={RentalAdd}
        edit={RentalEdit}
      />
      <Resource
        name="product"
        list={ProductsList}
        create={ProductAdd}
        edit={ProductEdit}
      />
      <Resource
        name="rental_products"
        list={RentalProductsList}
        create={RentalProductAdd}
        edit={RentalProductEdit}
      />
      <Resource
        name="promotions"
        list={PromotionsList}
        create={PromotionsAdd}
        edit={PromotionsEdit}
      />
      <CustomRoutes>
        <Route
          path="products_with_weight"
          element={<ProductsWithWeightList />}
        />
      </CustomRoutes>
    </Admin>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
