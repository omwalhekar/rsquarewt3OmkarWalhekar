import React, { Fragment } from "react";

function logo({ srcLarge, srcSmall }) {
  return (
    <Fragment>
      <img src={srcLarge} alt="" className="logo-img lg" />
      <img src={srcSmall} alt="" className="logo-img sm" />
    </Fragment>
  );
}

export default logo;
