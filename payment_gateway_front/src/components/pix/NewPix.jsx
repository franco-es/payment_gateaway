import React, { useState, useCallback } from "react";

import { Form, Button } from "react-bootstrap";

import setPixConn from "../../services/pix/savePix";

const NewPix = (props) => {
  const [token] = useState(localStorage.getItem("token"));
  const [idPix] = useState(localStorage.getItem("id_pix"));
  const [pix, setPix] = useState("");

  React.useEffect(() => {
    setPix(props.Pix);
  }, [setPix]);

  const savePix = async (e) => {
    e.preventDefault();
    if (idPix === undefined || null) {
      await setPixConn(pix, token, "post")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await setPixConn(pix, token, "put")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Form onSubmit={savePix}>
        <div className="mb-3" controlId="formBasicEmail">
          <span>Pix</span>
          <Form.Control
            type="text"
            placeholder="PIX"
            value={pix}
            onChange={(e) => setPix(e.target.value)}
          />
        </div>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default NewPix;
