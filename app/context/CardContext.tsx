"use client";

import React, { createContext, useReducer, useContext, useEffect, ReactNode } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface CartState {
  cart: Product[];
}

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR_CART" };

interface CartContextValue {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null); // Change from `undefined` to `null`

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProductIndex = state.cart.findIndex((item) => item._id === action.product._id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += action.product.quantity || 1;
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, action.product] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item._id !== action.id) };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.id ? { ...item, quantity: action.quantity } : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const totalItems = state.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "ADD_TO_CART", product: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
