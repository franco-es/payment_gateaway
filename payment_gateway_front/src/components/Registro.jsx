import React from "react";

const Registro = () => {
  return (
    <div>
      <div className="box">
        <div className="card">
          <div className="card-title">
            <h1>Register</h1>
          </div>
          <div className="card-body width18rem align-content-center">
            <form>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="form-group">
                <label for="dni">DNI</label>
                <input type="text" className="form-control" id="dni" />
              </div>
              <div className="form-group">
                <label for="phone">Phone</label>
                <input type="text" className="form-control" id="phone" />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I agree with terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
