import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import Cookies from 'js-cookie';

const initialState = {
  // currentUser: Cookies.get('currentUser')
  //   ? JSON.parse(Cookies.get('currentUser'))
  //   : null,

  currentUser: null,
  shippingAddress: null,
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
  },
});

export const { addUser, addShippingAddress } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export const selectAddress = (state) => state.user.shippingAddress;

export default userSlice.reducer;
