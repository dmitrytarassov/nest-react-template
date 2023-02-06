import React from 'react';
import * as reactAdmin from 'react-admin';
import { Title, Link } from 'react-admin';
import { __dataProvider } from '@admin/AdminNoSsrPage';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

interface ProductsWithWeightListProps {}

const ProductsWithWeightList = ({}: ProductsWithWeightListProps) => {
  const [city, set_city] = React.useState<string>('spb');
  const [showOnMainPage, set_showOnMainPage] = React.useState<boolean>(true);
  const [list, set_list] = React.useState<any[]>([]);

  const load = async () => {
    const promotions = await __dataProvider(reactAdmin.GET_LIST, 'promotions', {
      filter: {},
      meta: undefined,
      pagination: { page: 1, perPage: 100 },
      sort: { field: 'weight', order: 'DESC' },
    });

    const _promotions = promotions.data.filter(({ weight }) => weight);

    const _rentalsIds = _promotions.map((e) => e.rentalId);
    const __rentals = await fetch(
      `/api/rental?filter[]=_id,in,${_rentalsIds.join('|')}`,
    );

    const ___rentals = await __rentals.json();

    const _promos = _promotions
      .map((p) => {
        const rental = ___rentals.data.find((a) => a.id === p.rentalId);
        if (rental) {
          return {
            id: p.id,
            name: `${p.name} (${rental.name})`,
            type: 'Акция',
            weight: p.weight,
            city: rental.city,
            unique: false,
            showOnMainPage: p.showOnMainPage,
          };
        }
      })
      .filter(Boolean);

    const rentalProducts = await __dataProvider(
      reactAdmin.GET_LIST,
      'rental_products',
      {
        filter: {},
        meta: undefined,
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'weight', order: 'DESC' },
      },
    );
    const rp = rentalProducts.data.filter((e) => e.weight > 0);
    const ids = rp.map((e) => e.productId);

    const products = await fetch(
      `/crud/product?filter[]=_id,in,${ids.join('|')}`,
    );
    const _products = await products.json();
    const rentalsIds = rp.map((e) => e.rentalId);
    const rentals = await fetch(
      `/crud/rental?filter[]=_id,in,${rentalsIds.join('|')}`,
    );
    const _rentals = await rentals.json();

    const _rentalProducts = rp
      .map((e) => {
        const product = _products.data.find((a) => a.id === e.productId);
        const rental = _rentals.data.find((a) => a.id === e.rentalId);

        if (product && rental) {
          return {
            name: `${product.name} (${rental.name})`,
            type: 'Позиция',
            id: e.id,
            weight: e.weight,
            city: rental.city,
            unique: product.unique,
            showOnMainPage: e.showOnMainPage,
          };
        }
      })
      .filter(Boolean);

    set_list(
      [..._rentalProducts, ..._promos].sort((a, b) =>
        a.weight < b.weight ? 1 : -1,
      ),
    );
  };

  React.useEffect(() => {
    load();
  }, []);

  console.log(list);

  return (
    <>
      <Title title="My Page" />
      <>
        <ButtonGroup
          size="small"
          aria-label="small button group"
          style={{ marginTop: 20 }}
        >
          <Button
            variant={city === 'spb' ? 'contained' : undefined}
            onClick={() => set_city('spb')}
          >
            Spb
          </Button>
          <Button
            variant={city === 'moscow' ? 'contained' : undefined}
            onClick={() => set_city('moscow')}
          >
            Msk
          </Button>
        </ButtonGroup>
        <ButtonGroup
          size="small"
          aria-label="small button group"
          style={{ marginTop: 20 }}
        >
          <Button
            variant={showOnMainPage ? 'contained' : undefined}
            onClick={() => set_showOnMainPage(true)}
          >
            Только главная страница
          </Button>
          <Button
            variant={!showOnMainPage ? 'contained' : undefined}
            onClick={() => set_showOnMainPage(false)}
          >
            Весь список
          </Button>
        </ButtonGroup>
        <TableContainer component={Paper} style={{ marginTop: 20 }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="right">Тип</TableCell>
                <TableCell align="right">Вес</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list
                .filter((e) => e.city === city)
                .filter((e) => (showOnMainPage ? e.showOnMainPage : true))
                .map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Link
                        to={`${
                          row.type === 'Акция'
                            ? '/promotions'
                            : '/rental_products'
                        }/${row.id}`}
                      >
                        {row.name}
                      </Link>
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.weight || 0}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </>
  );
};

export default ProductsWithWeightList;
