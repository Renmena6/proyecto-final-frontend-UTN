
import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()

  const nagivate = useNavigate()

  const handleLogin = async (e) => {
  e.preventDefault()

  setError("")

  // Validar que los campos no esten vacíos 
  if (!username || !password) {
    setError("Debes completar ambos campos.");
    return;
  }

  const isLogin = await login(username, password)

  if (isLogin) {
    setUsername("")
    setPassword("")
    navigate("/")
  } else {
    //validacion si is login es falsse
    setError("Usuario o contraseña incorrectos");
  }
}
  return (
    <Layout>
      <h1>Inicia sesión</h1>

      <section>
        <h2>Hola, bienvenido de nuevo</h2>
        <p>johnd, m38rmF$</p>
        <form onSubmit={handleLogin}>
          <div>
            <label>Nombre de usuario:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button>Ingresar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
    </Layout>
  )
}

export { Login }