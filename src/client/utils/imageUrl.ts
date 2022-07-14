const imageUrl = (u?: string): string =>
  u
    ? u.startsWith('/public')
      ? u
      : `/public/${u}`
    : '/public/logoWithCover.svg';

export default imageUrl;
