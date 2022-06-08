export interface ICrudRentalProduct {
  id: string;

  rentalId: string;

  productId: string;

  url: string;

  price?: number;

  discountPrice?: number;

  promotionType?: string;

  promotionText?: string;

  promotionDescription?: string;

  promotionShortDescription?: string;

  date: Date;
}
