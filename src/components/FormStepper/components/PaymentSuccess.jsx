import React from "react";

function PaymentSuccess({ htmlResponse }) {
  console.log("html response success", htmlResponse);
  return (
    <div>
      <h2>Payment Response</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlResponse }} />
    </div>
  );
}

export default PaymentSuccess;
