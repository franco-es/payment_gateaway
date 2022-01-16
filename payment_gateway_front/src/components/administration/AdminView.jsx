import React, { useEffect, useState } from "react";

import getCategory from "../../services/category/getCategory";

const AdminView = () => {
  const [isAdmin, setIsAdmin] = useState("");

  useEffect(() => {
    getAdminProfile();
  });
  const getAdminProfile = async () => {
    await getCategory(localStorage.getItem("token")).then((res) => {
      if (res.data.category === "ADMIN") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  };

  return isAdmin ? (
    <div className="h-100vh mb-5">
      <div className="container d-flex flex-column h-100 mt-5 ">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-8">
              <div className="row gutters-sm">
                <div className="col-sm-12 mb-12">
                  <div className="shadow-lg card">
                    <div className="card-body">
                      <h4 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          Donativos
                        </i>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* retiros */}
            <div className="col-md-4 mb-3">
              <div className="shadow card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="mt-3 material-icons text-info mr-2">
                      <h4>Solicitudes de Retiro</h4>
                    </div>
                    <div className="mt-3">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Unanthorized</div>
  );
};

export default AdminView;
