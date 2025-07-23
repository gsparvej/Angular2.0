
export interface OrderModel {
   id?: number;
  size: 'S' | 'M' | 'L';
  quantity: number;
  price: number;
  totalQuantity?: number;
  totalPrice?: number;
  
}
