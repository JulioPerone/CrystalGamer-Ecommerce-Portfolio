// useNewUser.js
// Custom hook que permite la creación de un nuevo usuario.

import { useState } from "react"

export const useNewUser = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function createUser(newUser) {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error("Error al crear usuario");
            }

            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { 
        data,       //datos del usuario creado
        isLoading,  //estado de carga
        error,      //mensaje de error si falla
        createUser  //funcion que ejecuta la creacion
    };
}
