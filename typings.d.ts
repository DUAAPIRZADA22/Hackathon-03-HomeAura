interface Products {
    name: string
    price: number
    salesPrize?: number
    tags?: string[]
    description: string
    size?: string[]
    height?: number
    width?: number 
    _id: string,
    quantity?: number
  slug?: {
    current: string;
  },
  index?: number; 
  image: string,
  
}

interface ProductsCard{
  _id: string;
  name: string,
  height: number,
  width: number,
  salesPrize: string,
  price: number
  image: string;
  slug:{
    current: string | null;
  }
}

export interface WishlistItem {
  _id: string;
  title: string;
  price: number;
  image: string;
  slug: { current: string };
  name: string; 
}

interface CartState {
  cart: Products[];
}

type CartAction =
  | { type: "SET_CART"; cart: Products[] }
  | { type: "ADD_TO_CART"; product: Products }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR_CART" };

  interface ShippingDetails {
    name: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  }
  
  interface Payments {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

interface PaymentResult {
  success: boolean;
  transactionId: string;
}

interface Order {
  id: string;
  cart: Products[];
  shipping: ShippingDetails;
  payment: Payments;
}
