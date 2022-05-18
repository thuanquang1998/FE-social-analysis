// import { createSlice } from '@reduxjs/toolkit';

// export interface BoxState {
//   ultimateBox: {
//     boxAvailable: number;
//     price: number;
//     limitPerPurchase: number;
//   },

//   commonBox: {
//     boxAvailable: number;
//     price: number;
//     limitPerPurchase: number;
//   }
// }

// const initialState: BoxState = {

//   ultimateBox: {
//     boxAvailable: 0,
//     price: 149,
//     limitPerPurchase: 3,
//   },

//   commonBox: {
//     boxAvailable: 0,
//     price: 49,
//     limitPerPurchase: 3,
//   }

// };

// export const boxSlice = createSlice({
//   name: 'box',
//   initialState,
//   reducers: {
//     setBoxInfo: (state, action) => {

//       const { boxInfoCommon, boxInfoUltimate } = action.payload;

//       state.ultimateBox =  {
//         boxAvailable: boxInfoUltimate.boxAvailable,
//         price: boxInfoUltimate.price,
//         limitPerPurchase: boxInfoUltimate.limitPerPurchase,
//       };

//       state.commonBox = {
//         boxAvailable: boxInfoCommon.boxAvailable,
//         price: boxInfoCommon.price,
//         limitPerPurchase: boxInfoCommon.limitPerPurchase,
//       }
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { setBoxInfo } = boxSlice.actions;

// export default boxSlice.reducer;
