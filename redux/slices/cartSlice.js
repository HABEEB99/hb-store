import { createSlice } from '@reduxjs/toolkit';
// import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const initialState = {
  products: [],
  productTotalPrice: 0,
  cartTotalPrice: 0,
  // productTotalQuantity: 0,
  // productTotalAmount: 0,
  // products: Cookies.get('products') ? JSON.parse(Cookies.get('products')) : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (productIndex >= 0) {
        state.products[productIndex].productQuantity += 1;
        toast.info(`${action.payload.name} quantity in cart increased by 1`, {
          position: 'bottom-right',
        });
      } else {
        const productInCart = { ...action.payload, productQuantity: 1 };
        state.products = [...state.products, productInCart];
        toast.success(`${action.payload.name} added to cart`, {
          position: 'bottom-right',
        });
      }

      // Cookies.set('products', JSON.stringify(state.products));
      // localStorage.setItem('products', JSON.stringify(state.products));
    },

    removeFromCart: (state, action) => {
      const filteredProducts = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = filteredProducts;
      toast.error(`${action.payload.name} removed from cart`, {
        position: 'bottom-right',
      });
    },

    decreaseProductQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (state.products[productIndex].productQuantity > 1) {
        state.products[productIndex].productQuantity -= 1;
      } else if (state.products[productIndex].productQuantity === 1) {
        const filteredProduct = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.products = filteredProduct;
      }

      toast.error(`${action.payload.name} quantity decreased by 1`, {
        position: 'bottom-right',
      });
    },

    removeAllProducts: (state, action) => {
      state.products = [];
    },

    getTotals: (state, action) => {
      let { total, quantity } = state.products.reduce(
        (accumulator, product) => {
          const { price, productQuantity } = product;
          const productTotal = price * productQuantity;
          accumulator.total += productTotal;
          accumulator.quantity += productQuantity;

          return accumulator;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.productTotalQuantity = quantity;
      state.productTotalAmount = total;
    },

    // totalSum: (state, action) => {
    //   let total = state.products.map(
    //     (product) => product.price * product.productQuantity
    //   );
    //   cartTotalPrice += total;
    // },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseProductQuantity,
  removeAllProducts,
  getTotals,
  totalSum,
} = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;
export const selectTotalPrice = (state) => {
  // let total = state.products.forEach(
  //   (product) => product.price * product.productQuantity
  // );
  // state.cart.cartTotalPrice += total;
};

export default cartSlice.reducer;
