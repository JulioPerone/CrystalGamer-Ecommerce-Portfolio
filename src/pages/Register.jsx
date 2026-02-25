// Register.jsx
// Página de registro que permite la creación de un nuevo usuario

import { Link } from "react-router-dom";
import { useState } from "react"
import { useNewUser } from "../hooks/useNewUser"
import { initialUserForm } from "../utils/initialForm";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import "../sass/register-loginStyle.scss"



export const Register = () => {
    const { data, isLoading, error, createUser } = useNewUser();
    const [form, setForm] = useState(initialUserForm);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(form);
    }

    return (
        <>
            <Link to="/"><HomeSharpIcon fontSize='large' color='action' /></Link>
            <form className="form-register" onSubmit={handleSubmit}>
                <label name="nombre">Nombre</label><br />
                <input name="nombre" value={form.nombre} onChange={handleChange}/><br/>
                <label name="apellido">Apellido</label><br />
                <input name="apellido" value={form.apellido} onChange={handleChange}/><br/>
                <label name="correo">Correo</label><br />
                <input name="correo" value={form.correo} onChange={handleChange}/><br/>
                <label name="contraseña">Contraseña</label><br />
                <input name="contraseña" type="password" value={form.contraseña} onChange={handleChange}/><br/>
                <label name="direccion">Direccion</label><br />
                <input name="direccion" value={form.direccion} onChange={handleChange}/><br/>
                <label name="fecha_nacimiento">Fecha de nacimiento</label><br />
                <input name="fecha_nacimiento" type="date" value={form.fecha_nacimiento} onChange={handleChange}/><br/>
                <label name="telefono">Telefono</label><br />
                <input name="telefono" value={form.telefono} onChange={handleChange}/><br />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Resgistrando..." : "Registrarme"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {data && <p>Usuario creado exitosamente!: {data.nombre}</p>}
            </form>
        </>
    );
}

export default Register;