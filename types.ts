
export type GoldColour = 'Yellow' | 'Rose' | 'White' | 'Yellow-White' | 'Rose-White' | 'Yellow-Rose';

export interface OrderDetails {
  party: string;
  orderTo: string;
  design: string;
  goldWt: string;
  goldKt: '14' | '18' | '22' | '24';
  goldColour: GoldColour;
  diaWt: string;
  diaQuality: string;
  diaPrice: string;
  goldPrice: string;
  size: string;
  orderDate: string;
  deliveryDate: string;
  comments: string;
  images: string[];
}