import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  agreeToTerms: false,
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setError: (state, action) => {
      state.errors = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, setError, resetForm } = formSlice.actions;
export default formSlice.reducer;
