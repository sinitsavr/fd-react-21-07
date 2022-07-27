import React, { Component } from "react";
import styles from "./SignInForm.module.css";

const initialValues = {
  email: "",
  password: "",
  isemailValid: false,
  ispasswordValid:false
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handlerForm = (event) => {
    event.preventDefault();
    this.setState({ ...initialValues });
  };

  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(' ') });
  };

  render() {
    const { email, password, isemailValid , ispasswordValid} = this.state;
    const emailClassName = `${styles.input} ${isemailValid? null: styles.invalid}`;
    const passwordClassName = `${styles.input} ${ispasswordValid? null:  styles.invalid}`;
    return (
      <form className={styles.form} onSubmit={this.handlerForm}>
        <input
          name="email"
          onChange={this.handlerInput}
          value={email}
          className={emailClassName}
          placeholder="email"
          type="email"
        />
        <input
          name="password"
          onChange={this.handlerInput}
          value={password}
          className={passwordClassName}
          placeholder="password"
          type="password"
        />
        <input className={styles.input} type="submit" value="Send" />
      </form>
    );
  }
}

export default SignInForm;