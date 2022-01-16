import React from "react";
import { Button, Form } from "react-bootstrap";

const RetireFounds = () => {
  return (
    <div>
      <Form>
        <div className="mb-3" controlId="formBasicEmail">
          <span>Cuantity</span>
          <Form.Control type="text" placeholder="$" />
        </div>
        <Button variant="primary" type="submit">
          Send retirment
        </Button>
      </Form>
    </div>
  );
};

export default RetireFounds;
