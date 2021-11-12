import React, { useState } from "react";

const Pix = (props) => {
  const [pix] = useState(props.Pix);

  return (
    <div>
      <div>
        <div className="mb-3">
          <span>Pix: </span>
          <b>{pix}</b>
        </div>
      </div>
    </div>
  );
};

export default Pix;
