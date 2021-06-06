import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src={logo} width="250px" height="80px" marginleft="5px" />
			<h4>Inicio</h4>
			<h4>Servicios</h4>
			<h4>Acerca de </h4>
			<h4>Proyectos</h4>
			<h4>Contacto</h4>
		</nav>
	);
};
