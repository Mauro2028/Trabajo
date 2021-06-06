import React, { Component } from "react";
import logo from "../../img/Logo.png";
import Styles from "./footer.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div style={Styles.logoFooter} className="logoFooter">
			<img src={logo} width="400px" height="80px" />
		</div>
		<div style={Styles}>
			<p>© 2021 ERGTEC.</p>
		</div>
	</footer>
);
