import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"
import '../styles/pages/NotFound.css'

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found-container"> 
        <h1>404</h1>
        <p>¡Ups! Página no encontrada.</p>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    </Layout>
  )
}

export { NotFound }