/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Form, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">Nombre Usuario</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
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
                    <option value="1">Brazil</option>
                    <option value="2">Argentina</option>
                    <option value="3">Urugay</option>
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
        </div>
        <div className="col-md-4 ">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>New Archivments</span>
            </div>
            <br />
            <div className="col-md-12">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Desafio</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">Nuevo desafio</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Descripcion del desafio
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Cantidad de donativos</Form.Label>
                  <Form.Control type="number" placeholder="Cantidad" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </Form>
            </div>
          </div>

          <div className="col-md-12 border-top pt-5">
            <div className="d-flex justify-content-between align-items-center experience pb-3">
              <span>Agregar Cuenta Bancaria</span>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cuenta Bancaria</Form.Label>
                <Form.Control type="email" placeholder="Nro-Cuenta" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alias</Form.Label>
                <Form.Control type="email" placeholder="Alias" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
