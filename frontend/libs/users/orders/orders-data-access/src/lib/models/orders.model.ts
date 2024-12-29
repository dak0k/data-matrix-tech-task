export interface OrderDTO {
  id: string;
  orderName: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderCreate {
  orderName: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderDelete {
  id: string;
}
