import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import '../styles/pages/AuthForm.css'; 

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { setUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
            // esto es un emailRegex lo cual lo nombre validadorCaracteres
            // sirve para que invalide caracteres como "%&// etc
        const validadorCaracteres= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!username || !email || !password) {
            setError("Debes completar todos los campos.");
            return;
        }
        
        if (!validadorCaracteres.test(email)) {
            setError("El correo electrónico no es válido.");
            return;
        }

        if (username.length < 6) {
            setError("El nombre de usuario debe tener al menos 6 caracteres.");
            return;
        }

        // password mas robusta
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        
          if (!passwordRegex.test(password)) {
          setError("La contraseña debe tener al menos 8 caracteres, con mayúsculas, minúsculas y números.");
          return;
}

        try {
            const newUser = {
                email,
                username,
                password,
            };

            const response = await fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Usuario registrado con éxito:", data);
                setSuccess(`¡Registro exitoso! Tu ID de usuario es: ${data.id}`); 
                
                setUser(true);

                setUsername("");
                setEmail("");
                setPassword("");
            } else {
                setError("Error al registrar usuario. Intenta de nuevo.");
            }
        } catch (error) {
            console.error("Error en la petición:", error);
            setError("Ocurrió un error inesperado. Por favor, intenta más tarde.");
        }
    };

    return (
        <Layout>
            <div className="auth-container">
                <div className="auth-card">
                    <h2>Regístrate</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text" 
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Correo electrónico:</label>
                            <input
                                type="email" // quizas si se cambia a 'text' puede q no interfiera la validación del navegador
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <button>Registrarse</button>
                    </form>

                    {error && <p style={{ color: "red", textAlign: "center", marginTop: "16px" }}>{error}</p>}
                    {success && <p style={{ color: "green", textAlign: "center", marginTop: "16px" }}>{success}</p>}
                </div>
            </div>
        </Layout>
    );
};

export { Register };