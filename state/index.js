// import { configureStore } from '@reduxjs/toolkit';
// import { save, load } from 'redux-localstorage-simple';
// import { useDispatch } from 'react-redux';

// import box from './box';
// import inventory from './inventory';

// const PERSISTED_KEYS: string[] = ['box'];

// const store = configureStore({
//   devTools: process.env.NODE_ENV !== 'production',
//   reducer: {
//     box,
//     inventory,
//   },
//   middleware: [save({ states: PERSISTED_KEYS })],
//   preloadedState: load({ states: PERSISTED_KEYS }),
// });

// export type AppDispatch = typeof store.dispatch;
// export type AppState = ReturnType<typeof store.getState>;
// export const useAppDispatch = () => useDispatch();

// export default store;
