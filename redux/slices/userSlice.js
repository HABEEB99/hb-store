import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import Cookies from 'js-cookie';

const initialState = {
  // currentUser: Cookies.get('currentUser')
  //   ? JSON.parse(Cookies.get('currentUser'))
  //   : null,

  currentUser: null,
  shippingAddress: null,
  paymentType: null,
  order: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },

    addShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },

    addPaymentMethod: (state, action) => {
      state.paymentType = action.payload;
    },

    addOrder: (state, payload) => {
      state.order = action.payload;
    },
  },
});

export const { addUser, addShippingAddress, addPaymentMethod, addOrder } =
  userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export const selectAddress = (state) => state.user.shippingAddress;

export const selectPayment = (state) => state.user.paymentType;

export default userSlice.reducer;
