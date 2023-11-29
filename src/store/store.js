import { configureStore } from "@reduxjs/toolkit";
import studentSlice from './reducers/StudentSlice'

const store = configureStore({
  reducer: {
    get: studentSlice
  },
});

export default store;