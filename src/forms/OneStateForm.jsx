import { useState } from "react";
import React from 'react';

const OneStateForm = () => {

  const [customer, setCustomer] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    phone: ""
  });

  const handleChange = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e);
  };

  return (
    <>
      <form>
        <input
          placeholder="first name..."
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="last name..."
          name="lastName"
          onChange={handleChange}
        />
        <br />
        <input placeholder="email..." name="email" onChange={handleChange} />
        <br />
        <input
          placeholder="address..."
          name="address"
          onChange={handleChange}
        />
        <br />
        <input placeholder="city..." name="city" onChange={handleChange} />
        <br />
        <input placeholder="phone..." name="phone" onChange={handleChange} />
      </form>
      <p>Name:{customer.name} </p>
      <p>Last name: {customer.lastName}</p>
      <p>Email:{customer.email} </p>
      <p>Address: {customer.address}</p>
      <p>City:{customer.city} </p>
      <p>Phone: {customer.phone}</p>
    </>
  );
};

export default OneStateForm;