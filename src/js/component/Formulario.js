import React from "react";
import { Link } from "react-router-dom";

const Formulario = () => {
	const stilo = () => {
		style = { marginLeft: "25px", width: "600px", fontSize: "20px" };
	};
	return (
		<div>
			<h1 style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>Contacto</h1>
			<div className="row align-items-start">
				<div className="col" style={{ marginLeft: "40px", border: "3px solid #000" }}>
					<label style={{ marginLeft: "25px", width: "600px", fontSize: "20px", marginTop: "20px" }}>
						Nombre
					</label>
					<input style={{ marginLeft: "25px", width: "600px", fontSize: "20px" }} />
					<label style={{ marginLeft: "25px", width: "600px", fontSize: "20px" }}>Correo Electrico</label>
					<input style={{ marginLeft: "25px", width: "600px", fontSize: "20px" }} />
					<label style={{ marginLeft: "25px", width: "600px", fontSize: "20px" }}>Asunto</label>
					<input style={{ marginLeft: "25px", width: "600px", fontSize: "20px" }} />
					<label style={{ marginLeft: "25px", width: "600px", fontSize: "20px" }}>Mensaje</label>
					<input style={{ marginLeft: "25px", width: "600px", height: "107px", fontSize: "20px" }} />
					<p />
				</div>
				<div className="col" style={{ marginRight: "40px", border: "3px solid #000" }}>
					<p />
					<p
						style={{
							marginLeft: "30px",
							fontSize: "25px",
							display: "flex",

							color: "black"
						}}>
						JF Bottling Service & Installation Group Co.
					</p>
					<br />
					<p
						style={{
							marginLeft: "20px",
							fontSize: "25px",
							display: "flex",

							color: "black"
						}}>
						{" "}
						Dirección: P.O. Box 814297 - Hollywood FL 33081-4297 - United State.
					</p>
					<br />
					<p
						style={{
							marginLeft: "20px",
							fontSize: "25px",
							display: "flex",

							color: "black"
						}}>
						Officina: +1 (954) 780-9105
					</p>
					<br />
					<p
						style={{
							marginLeft: "20px",
							fontSize: "25px",
							display: "flex",

							color: "black"
						}}>
						Llamada Gratuita: +1 (877) 219-5029
					</p>
					<br />
					<p
						style={{
							marginLeft: "20px",
							fontSize: "25px",
							display: "flex",

							color: "black"
						}}>
						Correo Electrónico: info@jfbsigroup.com
					</p>
					<p />
					<br />
				</div>
			</div>
		</div>
	);
};

export default Formulario;
