import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Hello Rigo!</h1>
    <h1>EL Wizard Hernandez</h1>
    <h1>Mauro CRACK</h1>
    <p>
      <img src={rigoImage} />
    </p>
    <a href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
    </a>
  </div>
);
