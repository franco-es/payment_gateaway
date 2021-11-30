/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback } from "react";

import Pix from "../pix/Pix";
import NewPix from "../pix/NewPix";
import ProfileEdit from "./ProfileEdit";
import TableArchivments from "../archivments/TableArchivments";
import NewArchivment from "../archivments/NewArchivment";

import getPixConn from "../../services/pix/getPix";

import { Form, Button, Row, Col } from "react-bootstrap";

const Profile = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pix, setPix] = useState("");
  const [isNewPix, setIsNewPix] = useState(false);
  const [isEditArchivments, setIsEditArchivments] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [challeng, setChalleng] = useState("");
  const [chalengeDesc, setChalengeDesc] = useState("");
  const [chalengeCuantity, setChalengeCuantity] = useState("");

  useEffect(async () => {
    var user = getUser();
    setId(user.ID_USERS);
    setName(user.USER_NAME);
    setLastName(user.USER_LASTNAME);
    setEmail(user.USER_EMAIL);
    setPhone(user.USER_PHONE);
    setUsername(user.USER_USERNAME);

    await getPixConn(user.ID_USERS).then((res) => {
      let data = res.data.pix;
      localStorage.setItem("id_pix", data.id_pix);
      setPix(data.code);
    });
  }, []);

  /**
   *
   * @returns user data in JSON format
   */
  function getUser() {
    let userStr = localStorage.getItem("user");
    let userJson = JSON.parse(userStr);
    return userJson;
  }

  const newPix = (e) => {
    e.preventDefault();
    setIsNewPix(!isNewPix);
  };
  const EditArchivments = (e) => {
    e.preventDefault();
    setIsEditArchivments(!isEditArchivments);
  };
  const EditProfile = (e) => {
    e.preventDefault();
    setIsEditProfile(!isEditProfile);
  };

  return (
    <div className="h-100vh">
      <div className="shadow-lg container rounded bg-white mt-5 mb-5 pb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{username}</span>
              <span className="text-black-50">{email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">perfil</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center experience pb-3">
                <Button onClick={EditProfile}>
                  {isEditArchivments === true ? "Cancelar" : "Agregar Meta"}
                </Button>
              </div>
              {isEditProfile ? (
                <ProfileEdit />
              ) : (
                <div>
                  <Row className="row mt-2">
                    <Col md={6}>
                      <Form.Label>Nombre y Apellido</Form.Label>
                    </Col>
                    <Col md={6}>
                      <span className="labels">{name} </span>
                      <span className="labels">{lastName}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Telefono</Form.Label>
                    </Col>
                    <Col md={6}>
                      <span className="labels">{phone}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Email</Form.Label>
                    </Col>
                    <Col md={6}>
                      <span>{email}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label>PostCode</Form.Label>
                    </Col>
                    <Col md={6}>
                      <span className="labels">Postcode</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Pais</Form.Label>
                    </Col>
                    <Col md={6}>
                      <div aria-label="Default select example">
                        <span>Pais</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Archivments</span>
              </div>
              <br />
              <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center experience pb-3">
                  <h3>Comming soon</h3>

                  {/* <Button onClick={EditArchivments}>
                    {isEditArchivments === true ? "Cancelar" : "Agregar Meta"}
                  </Button> */}
                </div>
                {/* {isEditArchivments === true ? (
                  <NewArchivment />
                ) : (
                  <TableArchivments />
                )} */}
              </div>
            </div>

            <div className="col-md-12 border-top pt-5">
              <div className="d-flex justify-content-between align-items-center experience pb-3">
                <Button onClick={newPix}>
                  {isNewPix === true ? "Cancelar" : "Agregar / Modificar PIX"}
                </Button>
              </div>
              {isNewPix === true ? <NewPix Pix={pix} /> : <Pix Pix={pix} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
