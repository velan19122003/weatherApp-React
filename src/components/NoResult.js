import React from "react";

function NoResult(props) {
  let errorData = props.error;
  //   console.log(errorData);

  return (
    <>
      <p>{errorData.errorMsg}</p>
    </>
  );
}

export default NoResult;
