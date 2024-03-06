import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AtheProfileLayout from "../../components/layout/AtheProfileLayout";
import { Input } from "@mantine/core";
import { Select } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

const EditProfile = () => {
  const [value, setValue] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    city: "",
    state: "",
    dob: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to handle profile updates
    // You can make a fetch or axios call here to send the updated data
    // to your backend.
    console.log("Form data submitted:", formData);
    // Add your API call logic here
  };
  return (
    <AtheProfileLayout>
      <div className="d-flex">
      <NavLink to='/a-manager'>
        <div className="d-flex gap-3 mb-4">
         
          <button className="modal-close "style={{background:"#1C1C1C0D"}}>
            <i class="fa-solid fa-arrow-left" style={{color:"black"}}></i>
          </button>
          <p className="profile-header">Edit</p>
        </div>
        </NavLink>

        
      </div>

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
          <label htmlFor="inputEmail4">Date of birth</label>
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
          <div className="d-flex " style={{ width: "100%" }}>
            <select className="select">
              <option>+91</option>
            </select>
            <Input
              variant="filled"
              placeholder="Phone Number"
              style={{ width: "100%" }}
            />
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
          <PasswordInput variant="filled" placeholder="Create Password" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Confirm Password</label>
          <PasswordInput variant="filled" placeholder="Confirm" />
        </div>
      </div>
    </AtheProfileLayout>
  );
};

export default EditProfile;
