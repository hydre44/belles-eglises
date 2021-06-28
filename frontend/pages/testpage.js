import React, { useState, useEffect } from "react";

export default function Test() {
  const [hasError, setErrors] = useState(false);
  const [eglises, setEglises] = useState({});
  async function fetchData() {
    const res = await fetch("http://localhost:1337/eglises/2");
    res
      .json()
      .then((res) => {
        setEglises(res);
        console.log(res);
      })
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(eglises)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}
