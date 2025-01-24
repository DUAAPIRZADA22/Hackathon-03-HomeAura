"use client";

import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useCart } from "../context/CardContext"; 
import { WishlistItem, Products } from "../../typings";

// Define the shape of our wishlist state
interface WishlistState {
  wishlist: WishlistItem[];
}

// Define what values our context will provide
interface WishlistContextValue {
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
  totalItems: number;
  moveToCart: (product: WishlistItem) => void;
  cartDispatch: React.Dispatch<any>; 
}

// Define the action types for the wishlist
type WishlistAction =
  | { type: "SET_WISHLIST"; product?: WishlistItem }
  | { type: "ADD_TO_WISHLIST"; product: WishlistItem }
  | { type: "REMOVE_FROM_WISHLIST"; id: string }
  | { type: "CLEAR_WISHLIST" };

// Create our reducer to handle wishlist state changes
const wishlistReducer = (
  state: WishlistState,
  action: WishlistAction
): WishlistState => {
  switch (action.type) {
    case "SET_WISHLIST":
      return { wishlist: action.product ? [action.product] : [] };

    case "ADD_TO_WISHLIST": {
      if (
        action.product &&
        !state.wishlist.some((item) => item._id === action.product._id)
      ) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.product],
        };
      }
      return state;
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== action.id),
      };

    case "CLEAR_WISHLIST":
      return { wishlist: [] };

    default:
      return state;
  }
};

// Create the context
const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined
);

// Create the provider component
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    wishlistReducer,
    { wishlist: [] },
    (initialState) => {
      if (typeof window !== "undefined") {
        try {
          const storedWishlist = localStorage.getItem("wishlist");
          return storedWishlist
            ? { wishlist: JSON.parse(storedWishlist) }
            : initialState;
        } catch (error) {
          console.error("Error loading wishlist from localStorage:", error);
          return initialState;
        }
      }
      return initialState;
    }
  );

  const { dispatch: cartDispatch } = useCart(); // Ensure this hook is valid

  const totalItems = state.wishlist.length;

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    } catch (error) {
      console.error("Error saving wishlist to localStorage:", error);
    }
  }, [state.wishlist]);

  const moveToCart = (product: WishlistItem) => {
    const productWithDetails: Products = {
      ...product,
      name: product.name, // Assuming 'title' is the 'name' for the product
      description: "", // Provide a default description or fetch it if possible
    };

    cartDispatch({
      type: "ADD_TO_CART",
      product: { ...productWithDetails, quantity: 1 },
    });

    dispatch({ type: "REMOVE_FROM_WISHLIST", id: product._id });
  };

  const contextValue: WishlistContextValue = {
    state,
    dispatch,
    totalItems,
    moveToCart,
    cartDispatch, 
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};







