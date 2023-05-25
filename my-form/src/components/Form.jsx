import React, { useState, useEffect, useRef } from "react";
import Input from "./Input/Input";
import { toast } from 'react-toastify';
import "./Form.css";

const Form = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const firstRender = useRef(true);

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  // const [disable, setDisabled] = useState(true);
  // set error messages to display to the user
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  

  const formValidation = () => {
    let error = false;
    if (username === "") {
      setNameError("Name can't be blank!")
      error = true;
      console.error(nameError);
    }

    let regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test.email) {
      setEmailError('Enter a valid email')
      error = true;
      console.error(emailError)
    }
    if (email === "") {
      setEmailError('Mandatory Field')
      error = true;
    }

    if (error === true) {
      return true;
    }
    else {
      setNameError(null)
      setEmailError(null)
      return false
    }
  }
  useEffect(() => {

    // we want to skip validation on first render
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    
    formValidation();

  }, [username, email])



  function userNameHandler(event) {
    event.preventDefault();
    setUserName(event.target.value);
  }

  function emailHandler(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }
  function messageHandler(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }


  function submitHandler() {
      
        setTimeout(() => {
        setUserName("");
        setEmail("");
        setMessage("");
  
        }, 2000)

    toast.success("Successful");

    console.log({ username, email, message });
  }

  return (
    <div className="container">
      <div className="form">
        <h3 className="title"> My Interview Form </h3>
        <div className="formGroup">
          <label htmlFor="Username">User Name</label>
          <Input
            inputProps={{
              type: "text",
              placeholder: "Username",
              value: username,
              onChange: userNameHandler,
            }} />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <Input
            inputProps={{
              type: "email",
              placeholder: "Email",
              value: email,
              onChange: emailHandler,
            }} />
        </div>

         <div className="formGroup">
          <label htmlFor="message">Input Message</label>
          <textarea
            placeholder="Enter a message..."
            value={message}
            rows={6}
            columns={100}
            onChange={messageHandler}
            />
        </div> 

          <button className="btn" onClick={submitHandler}>
            Submit
          </button>
      </div>
    </div>
  );
};

export default Form;
