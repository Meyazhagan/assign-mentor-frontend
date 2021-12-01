import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

function BatchRoutes() {
  const batch_id = useParams().batchId;

  useEffect(() => {
    localStorage.setItem("batch_id", batch_id);
    // console.log()
  }, [batch_id]);

  return <Outlet />;
}

export default BatchRoutes;
