import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  const histoy = useHistory();
  const [username, setUsername] = useState("");

  const searchProfile = () => {
    histoy.push(`/public/${username}`);
  };

  return (
    <div className="h-100vh">
      <div className="container mt-5">
        <Form onSubmit={searchProfile}>
          <Form.Group>
            <Form.Label>Search an User</Form.Label>
            <Form.Control
              type="text"
              placeholder="User"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4">
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Inicio;
