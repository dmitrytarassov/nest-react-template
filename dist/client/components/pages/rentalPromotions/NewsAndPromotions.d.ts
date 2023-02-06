import React from 'react';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
interface NewsAndPromotionsProps {
    news: ICrudPromotion[];
    promotions: ICrudPromotion[];
}
declare const NewsAndPromotions: React.FC<NewsAndPromotionsProps>;
export default NewsAndPromotions;
