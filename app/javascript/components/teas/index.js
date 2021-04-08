import React, { useState, useEffect } from "react";
import axios from "axios";
import TeasItem from "./teas-item";
import FirstBlock from "../first-block";

import "./teas.css";

const Teas = () => {
  const [teas, setTeas] = useState([]);

  useEffect(() => {
    axios
      .get("/api/teas")
      .then((response) => setTeas(response.data.data))
      .catch((err) => console.log(err));
  }, [teas.length]);

  const handleDelete = (id) => {
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .delete(`/api/teas/${id}`)
      .then((response) => {
        setTeas(response.data.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <FirstBlock />
      <ul>
        {teas.map((el) => (
          <TeasItem {...el} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export default Teas;
