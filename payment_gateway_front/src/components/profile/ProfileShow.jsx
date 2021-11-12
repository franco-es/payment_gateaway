import React from 'react'

export const ProfileShow = () => {
    return (
        <div>
            <Row className="row mt-2">
              <Col md={6}>
                <span className="labels">{name}</span>
              </Col>
              <div md={6}>
                <span className="labels">{lastName}</span>
              </div>
            </Row>
            <Row>
              <Col md={12}>
                <span className="labels">{phone}</span>
              </Col>
              <Col className="col-md-12">
                <span>{email}</span>
              </Col>
              <Col className="col-md-12">
                <span className="labels">Postcode</span>
              </Col>
              <Col className="col-md-12">
                <span className="labels">
                  <b>Pais</b>
                </span>
                <div aria-label="Default select example">
                  <span>Pais</span>
                </div>
              </Col>
            </Row>
        </div>
    )
}
