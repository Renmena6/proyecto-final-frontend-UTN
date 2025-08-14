import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import '../styles/pages/AuthForm.css'; 

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login } = useAuth()

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError("")

        if (!username || !password) {
            setError("Debes completar ambos campos.");
            return;
        }

        if (username.length < 3) {
            setError("El nombre de usuario debe tener al menos 3 caracteres.");
            return;
        }

        if (password.length < 4) {
            setError("La contraseña debe tener al menos 4 caracteres.");
            return;
        }

        const isLogin = await login(username, password)

        if (isLogin) {
            setUsername("")
            setPassword("")
            navigate("/")
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    }

    return (
        <Layout>
            <div className="auth-container">
                <div className="auth-card">
                    <h2>Inicia sesión</h2>
                    <p className="toggle-link">
                        johnd, m38rmF$
                    </p>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Nombre de usuario:</label>
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username} />
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} />
                        </div>
                        <button>Ingresar</button>
                    </form>
                    {error && <p style={{ color: "red", textAlign: "center", marginTop: "16px" }}>{error}</p>}
                </div>
            </div>
        </Layout>
    )
}

export { Login }