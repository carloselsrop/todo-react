import { configureStore } from '@reduxjs/toolkit';
import slice from './tasks/slice'

export default configureStore({
  reducer: {
    tasks: slice,
  },
});