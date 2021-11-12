/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback } from "react";

import { Form, Button } from "react-bootstrap";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pix, setPix] = useState("");
  const [challeng, setChalleng] = useState("");
  const [chalengeDesc, setChalengeDesc] = useState("");
  const [chalengeCuantity, setChalengeCuantity] = useState("");

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-right">Editar mi perfil</h4>
      </div>
      <Form>
        <div className="row mt-2">
          <Form.Group className="col-md-6">
            <Form.Label className="labels">Nombre</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Nombre"
              value=""
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label className="labels">Apellido</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Apellido"
              value=""
            />
          </Form.Group>
        </div>
        <div className="row mt-3">
          <Form.Group className="col-md-12">
            <Form.Label className="labels">Telefono</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Telefono"
              value=""
            />
          </Form.Group>
          <Form.Group className="col-md-12">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" placeholder="Direccion" value="" />
          </Form.Group>
          <Form.Group className="col-md-12">
            <Form.Label className="labels">Postcode</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter address line 2"
              value=""
            />
          </Form.Group>
          <Form.Group className="col-md-12">
            <Form.Label className="labels">Pais</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="mt-5 text-center">
          <Button variant="primary" type="submit">
            Save Profile
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfileEdit;
