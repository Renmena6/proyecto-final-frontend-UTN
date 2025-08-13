import { Layout } from "../components/Layout";
import '../styles/pages/About.css';
const About = () => {
    return (

<Layout>
            <div className="about-conteiner">
                <section>
                    <h1>Sobre Nosotros</h1>
                    <h2>¿De qué trata este proyecto?</h2>
                    <p>Este proyecto es una tienda virtual construida con React que simula las funcionalidades básicas de un e-commerce. Permite a los usuarios explorar un catálogo de productos, buscar artículos específicos, y a los administradores (usuarios logueados) gestionar los productos, como actualizarlos o eliminarlos.</p>
                </section>


                <section>
                    <h2>¿A quién está dirigido?</h2>
                    <p>Está dirigido a un público general interesado en la tecnología y las compras online. La interfaz ha sido diseñada para ser intuitiva y fácil de usar.</p>
                </section>

                <section>
                    <h2>Tecnologías utilizadas</h2>
                    <ul>
                        <li><strong>React:</strong> Biblioteca principal para construir la interfaz de usuario.</li>
                        <li><strong>FakeStoreAPI:</strong> API externa para obtener y gestionar los datos de los productos y usuarios.</li>
                        <li><strong>React Router DOM:</strong> Sirve para la navegación entre las diferentes páginas.</li>
                        <li><strong>CSS:</strong> Utilizado para dar estilo a la aplicación, con un enfoque en el diseño responsivo para adaptarse a distintos dispositivos.</li>
                    </ul>
                </section>
            </div>
        </Layout>
            );
};

export { About };