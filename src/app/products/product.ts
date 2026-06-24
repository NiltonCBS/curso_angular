export interface Product {

  id: number;
  name: string;
  description: string;
  price: number;
  //o "?:" significa que esse campo é opcional, ou seja, só será aplicado a produtos que estão na promoção
  originalPrice?: number;
}
