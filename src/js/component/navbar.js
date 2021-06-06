import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import mexico from "../../img/mexico.jpeg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark " style={{ background: "#323336" }}>
			<img src={logo} width="250px" height="80px" marginleft="5px" />

			<div className="form-group" style={{ display: "inline-flex" }}>
				<h4 onClick={console.log("bailar")} style={{ color: "white", fontSize: "20px", margin: "20px" }}>
					Inicio
				</h4>
				<h4 style={{ color: "white", fontSize: "20px", margin: "20px", marginRight: "10px" }}>Servicios</h4>
				<h4 style={{ color: "white", fontSize: "20px", margin: "20px", marginRight: "10px" }}>Acerca de </h4>
				<h4 style={{ color: "white", fontSize: "20px", margin: "20px", marginRight: "10px" }}>Proyectos</h4>
				<h4 style={{ color: "white", fontSize: "20px", margin: "20px", marginRight: "10px" }}>Contacto</h4>
				<select
					style={{
						fontSize: "20px",
						margin: "20px",
						marginRight: "30px",
						color: "white",
						background: "#323336",
						border: "#323336"
					}}>
					{" "}
					<option value="vacio">Idioma</option>
					<option value="Espanol">Espanol</option>
					<option value="Ingles">Ingles</option>
				</select>
			</div>
		</nav>
	);
};
