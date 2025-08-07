import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";

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


    if (!username || !email || !password) {
      setError("Debes completar todos los campos.");
      return;
    }


    if (!email.includes('@') || !email.includes('.')) {
      setError("El correo electrónico no es válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {

      const newUser = {
        email,
        username,
        password,
      };

      // petición POST a la api de registro
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
      // capturar errores
      console.error("Error en la petición:", error);
      setError("Ocurrió un error inesperado. Por favor, intenta más tarde.");
    }
  };

  return (
    <Layout>
      <h1>Regístrate</h1>

      <section>
        <h2>Hola, bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
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

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </section>
    </Layout>
  );
};

export { Register };