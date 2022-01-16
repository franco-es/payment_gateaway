import React, { useState, useEffect } from "react";

import { Form } from "react-bootstrap";

const DonateForm = (props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [cuantity, setCuantity] = useState("");

  useEffect(() => {
    setId(props.idUser);
  });

  const verifyData = () => {};

  const changeData = (e) => {
    var myCheckbox = document.getElementsByName("cuantityDonations");
    myCheckbox.forEach((el) => {
      el.checked = false;
    });
    e.target.checked = true;
    setCuantity(e.target.value);
  };

  return (
    <div className="test">
      <Form name="formDonation" onSubmit={verifyData} className="mb-3">
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Ingrese un email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div key="inline-checkbox" className="mb-3">
          <Form.Check
            inline
            label="10 reales"
            name="cuantityDonations"
            value="1"
            type="checkbox"
            onClick={changeData}
          />
          <Form.Check
            inline
            label="20 reales"
            name="cuantityDonations"
            value="2"
            type="checkbox"
            onClick={changeData}
          />
          <Form.Check
            inline
            label="30 reales"
            name="cuantityDonations"
            value="3"
            type="checkbox"
            onClick={changeData}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Donate
        </button>
      </Form>
    </div>
  );
};

export default DonateForm;
