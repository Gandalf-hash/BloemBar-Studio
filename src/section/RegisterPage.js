import React from "react";
import Form from "../components/Form";
import { useState } from "react";
import styled from "styled-components";

const RegisterPage = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPass: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      // placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and should't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      // placeholder: "Email",
      errorMessage: "Should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      // placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      // placeholder: "Password",
      errorMessage:
        "password should be 8-20 characters and include at least 1 letter, 1 numbers and 1 special character",
      label: "Password",
      pattern:
        "/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,20}$/",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      // placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const Div = styled.div`
    position: relative;
    height: 300px;
  `;

  const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 100px;
  `;
  const Contents = styled.form`
  
  h1 {
    width: 100%
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 2px solid grey;
  }
  `;

  const Button = styled.button`
    width: 100%;
    padding: 16px;
    margin: 10px;
    color: white;
    background-color: #669999;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontmd};

    text-align: center;
    border: 0px solid;
    border-radius: 10px;
  `;

  return (
    <Div>
      <Container className="register">
        <Contents onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <Form
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button>Submit</Button>
        </Contents>
      </Container>
    </Div>
  );
};

export default RegisterPage;
