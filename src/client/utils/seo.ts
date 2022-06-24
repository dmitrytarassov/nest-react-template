const seo = ({ seo_title, seo_keywords, seo_description, seo_name }: any) => {
  return {
    title: `Kinoscope${
      seo_title || seo_name ? ` | ${seo_title || seo_name}` : ''
    }`,
    keywords:
      seo_keywords ||
      'Kinoscope, аренда кинообурудования, ренталы на карте, киноренталы',
    description:
      seo_description ||
      'Kinoscope, аренда кинообурудования, ренталы на карте, киноренталы',
  };
};

export default seo;
