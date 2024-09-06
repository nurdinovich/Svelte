import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../InputField/InputField';
import Checkbox from '../Checkbox/Checkbox';
import SubmitButton from '../SubmitButton/SubmitButton';
import { submitFormAsync, updateFieldAction } from '../../store/actions/formActions';
import classes from './Form.module.scss';

const Form = () => {
  const dispatch = useDispatch();
  const { name, company, email, phone, subject, message, agreeToTerms, errors } = useSelector(state => state.form);

  const handleChange = (name, value) => {
    dispatch(updateFieldAction(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormAsync());
  };

  return (
      <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.header}>
        <h1>For business enquiries please use the form below</h1>
        <h2>*Required</h2>
        </div>
      <InputField label="Name" name="name" value={name} required error={errors.name} onChange={handleChange} />
      <InputField label="Company" name="company" value={company} required error={errors.company} onChange={handleChange} />
      <InputField label="E-mail" name="email" value={email} type="email" required error={errors.email} onChange={handleChange} />
      <InputField label="Phone*" name="phone" value={phone} type="tel" onChange={handleChange} />
      <InputField label="Subject*" name="subject" value={subject} onChange={handleChange} />
      <InputField label="Message" name="message" value={message} type="textarea" required error={errors.message} onChange={handleChange} />
      <Checkbox label="I accept" name="agreeToTerms" checked={agreeToTerms} error={errors.agreeToTerms} onChange={handleChange} />
      <SubmitButton label="Send" />
    </form>
  );
};

export default Form;
