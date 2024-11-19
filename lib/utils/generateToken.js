import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});
	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // Tiempo de vida de la cookie en milisegundos
		httpOnly: true, // Impide el acceso a la cookie desde JavaScript en el cliente
		secure: true, // Requiere HTTPS (importante en producción)
		sameSite: "none", // Permitir envío entre dominios
	  });
	  
};
