import React, { useEffect } from 'react';
import axios from "axios";

// Default implementation, that you can customize
export default function Root({children}) {
  useEffect(() => {
    void (async () => {
      const { data } = await axios.get("https://uat.api.dwp.gov.sg/extendedauth/api/jwks");
      console.log(data);
    })();
  }, []);
  return <>{children}</>;
}
