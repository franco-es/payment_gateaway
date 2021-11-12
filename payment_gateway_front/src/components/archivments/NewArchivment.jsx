import React from 'react'

import { Form, Button } from "react-bootstrap";


const NewArchivment = () => {
    return (
        <div>
            <Form>
                <div className="mb-3" controlId="formBasicEmail">
                  <span>Desafio</span>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">Nuevo desafio</Form.Text>
                </div>
                <div className="mb-3" controlId="formBasicEmail">
                  <span>Descripcion</span>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Descripcion del desafio
                  </Form.Text>
                </div>

                <div className="mb-3" controlId="formBasicPassword">
                  <span>Cantidad de donativos</span>
                  <Form.Control type="number" placeholder="Cantidad" />
                </div>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </Form>
        </div>
    )
}

export default NewArchivment
