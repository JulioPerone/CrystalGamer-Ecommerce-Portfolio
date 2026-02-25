// Login.jsx
// Página que permite el inicio de sesión.

import { Link } from "react-router-dom";
import { useState } from "react";
import { useLoginUser } from "../hooks/useLoginUser";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

export const Login = () => {
    const [nombreUser, setNombreUser] = useState("");
    const [correoUser, setCorreoUser] = useState("");
    const [contraseñaUser, setContraseñaUser] = useState("");
    const [feedback, setFeedback] = useState({ nombre: null, correo: null, contraseña: null });

    const { data } = useLoginUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data) return;

        const userFound = data.find(
            (u) => u.nombre === nombreUser && u.correo === correoUser && u.contraseña === contraseñaUser
        );

        if (userFound) {
            setFeedback({ nombre: true, correo: true, contraseña: true });
            alert("Login exitoso ✅");
        } else {
            // Buscar el usuario por partes para dar feedback 
            const nombreOk = data.some((u) => u.nombre === nombreUser);
            const correoOk = data.some((u) => u.correo === correoUser);
            const contraseñaOk = data.some((u) => u.contraseña === contraseñaUser);

            setFeedback({
                nombre: nombreOk,
                correo: correoOk,
                contraseña: contraseñaOk,
            });

            alert("Error en login ❌");
        }
    };

    return (
        <>
            <Link to="/"><HomeSharpIcon fontSize='large' color='action' /></Link>
            <form className="form-login" onSubmit={handleSubmit}>
                <label>Ingrese Nombre</label>
                <input value={nombreUser} onChange={(e) => setNombreUser(e.target.value)} /><br />
                {feedback.nombre === false && <p>❌ El nombre no coincide</p>}
                {feedback.nombre === true && <p>✅ Nombre correcto</p>}

                <label>Ingrese Correo</label>
                <input value={correoUser} onChange={(e) => setCorreoUser(e.target.value)} /><br />
                {feedback.correo === false && <p>❌ El correo no coincide</p>}
                {feedback.correo === true && <p>✅ Correo correcto</p>}

                <label>Ingrese Contraseña</label>
                <input type="password" value={contraseñaUser} onChange={(e) => setContraseñaUser(e.target.value)} /><br />
                {feedback.contraseña === false && <p>❌ La contraseña no coincide</p>}
                {feedback.contraseña === true && <p>✅ Contraseña correcta</p>}

                <button type="submit">INGRESAR</button>
            </form>
        </>
    );
};

export default Login;