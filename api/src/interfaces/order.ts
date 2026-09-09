import type { Customer } from "./customer";

export interface Order {
  id: string;
  createdAt: Date;
  customer: Customer;
  total: number;
}

export interface OrderItem {
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
}
