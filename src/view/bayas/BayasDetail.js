import React, { useEffect, useState } from "react";
import { getBayasId } from "../../api/bayas";

const BayasDetail = (props) => {
  const id = props.match.params.id;
  const [berry, setBerry] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBayasId(id)
      .then((data) => {
        if (error) {
          setError(false);
        }
        setBerry(data);
        console.log(data);
      })
      .catch((x) => setError(true));
  }, []);

  return <h2>jshshsh</h2>;
};

export default BayasDetail;
