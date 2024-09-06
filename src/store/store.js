import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../store/reducers/ formReducer';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
