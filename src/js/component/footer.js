import React, { Component } from "react";
import logo from "../../img/Logo.png";
import Styles from "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" style={Styles}>
		<div className="logoFooter">
			<img src={logo} width="400px" height="80px" />
		</div>
		<div className="row align-items-start">
			<div className="col left">
				<p>© 2021 ERGTEC.</p>
			</div>
			<div className="col right">
				<p>Crafted by ERGTEC</p>
			</div>
		</div>
	</footer>
);
