import React, { useEffect, useState } from "react";

const Pix = (props) => {
  const [pix, setPix] = useState("");

  useEffect(() => {
    setPix(props.Pix)
  }, [props])

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
