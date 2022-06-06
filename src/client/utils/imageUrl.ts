import logoWithCover from '@frontend/assets/logoWithCover.svg';

const imageUrl = (u?: string): string => (u ? `/public/${u}` : logoWithCover);

export default imageUrl;
