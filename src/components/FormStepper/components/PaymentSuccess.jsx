import React from "react";

function PaymentSuccess({ html }) {
  return (
    <div>{htmlResponse === "" ? <div></div> : <InnerHTML html={html} />}</div>
  );
}

export default PaymentSuccess;
