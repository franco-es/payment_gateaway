import React from 'react'

import { Form, Button} from "react-bootstrap";


const NewPix = () => {
    return (
        <div>
            <Form>
              <div className="mb-3" controlId="formBasicEmail">
                <span>Pix</span>
                <Form.Control type="text" placeholder="PIX" />
              </div>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
        </div>
    )
}

export default NewPix
