import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  Row,
  Spinner,
} from "react-bootstrap";
import { PasswordInput } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { login } from "../../features/apiCall";
import AuthLayout from "./AuthLayout";
import { Input } from '@mantine/core';
import { Select } from '@mantine/core';

import { DateInput } from '@mantine/dates';

const SignUp = () => {
  const [value, setValue] = useState(null);

  const { isFetching, error, errMsg, token } = useSelector(
    (state) => state.auth
  );
  const [isLoogedIn, setIsLoogedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ErrorToastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false, // Added state for toggling password visibility
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleTogglePassword = () => {
    setValues((prevValues) => ({
      ...prevValues,
      showPassword: !prevValues.showPassword,
    }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // if (token) {
    //   navigate("/doctor/dashboard");
    // }
  }, [navigate, token, error, isFetching, isLoogedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    await login(dispatch, { email, password });
    setIsLoogedIn(true);
  };
  // useEffect(() => {
  //   if (error && !isFetching && isLoogedIn) {
  //     toast.error(errMsg || "Unknown error occurred", ErrorToastOptions);
  //     setIsLoogedIn(false);
  //   }
  // }, [error, isFetching, isLoogedIn, errMsg]);
  return (
    <AuthLayout>
      <div className="signUp-container">
       <div className="auth-haeder">
        <h2>Sign Up</h2>
       </div>
       <form>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">First Name</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Last Name</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Email</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Password</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4" >Date of birth</label>
        <DateInput
      value={value}
      variant="filled"
      onChange={setValue}
      rightSection={<i class="fa-solid fa-calendar"></i>}
      placeholder="Choose your date of birth"
    />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Phone Number</label>
        <div className="d-flex " style={{width:"100%"}}>
          <select className="select"><option>+91</option></select>
        <Input variant="filled" placeholder="Phone Number" style={{width:"100%"}}  />
        </div>
      
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Adress </label>
        <Input variant="filled" placeholder="Input component" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Address Line 2</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-4">
        <label htmlFor="inputEmail4">City</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputPassword4">State</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputPassword4">Zip Code</label>
        <Input variant="filled" placeholder="Input component" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Password</label>
        <PasswordInput
     variant="filled"
      placeholder="Create Password"
    />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Confirm Password</label>
        <PasswordInput
      variant="filled"
      placeholder="Confirm"
    />
      </div>
    </div>
    
    
 
  </form>
  <div className="auth-footer d-flex justify-content-between items-center">
  {isFetching ? (
          <Button type="submit" className="signup-button ">
            <Spinner animation="border" variant="light" />
          </Button>
        ) : (
          <Button type="submit" className="signup-button  ">
            Sign Up
          </Button>
        )}
      <div>
       <NavLink
          className="d-block w-100  mb-2 text-decoration-none purple-text"
          to="/signin"
        >
          Already an user?
        </NavLink>
      </div>
      
  </div>
  </div>
         
    </AuthLayout>
  );
};

export default SignUp;