import { resetForm, setError, updateField } from "../reducers/ formReducer";


export const submitFormAsync = () => (dispatch, getState) => {
  const { form } = getState();
  const { name, company, email, message, agreeToTerms } = form;
  
  const newErrors = {};
  if (!name) newErrors.name = 'Name is required';
  if (!company) newErrors.company = 'Company is required';
  if (!email) newErrors.email = 'Email is required';
  if (!message) newErrors.message = 'Message is required';
  if (!agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms';

  if (Object.keys(newErrors).length) {
    dispatch(setError(newErrors));
  } else {
    alert('Form submitted successfully!');
    dispatch(resetForm());
  }
};

export const updateFieldAction = (name, value) => (dispatch) => {
  dispatch(updateField({ name, value }));
};
