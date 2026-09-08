export interface Customer {
  firstName: string;
  lastName: string;
  phone: string;
  address: Address;
}

export interface Address {
  country: string;
  city: string;
  street: string;
  zipCode: string;
}
