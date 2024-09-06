import React from 'react';
import Form from './components/From/Form';
import classes from './App.module.scss';


const App = () => {
  return (
    <div  className={classes.container}>
      <h1>Hello</h1>
      <Form />
    </div>
  );
};

export default App;
