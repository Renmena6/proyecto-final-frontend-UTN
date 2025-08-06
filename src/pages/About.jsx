import { Layout } from "../components/Layout";

const About = () => {
    return (

    <Layout>
        <section>
            <h1>Sobre Nosotros</h1>
        
            <h2>¿De qué trata este proyecto?</h2>
            <p>Este proyecto es una tienda virtual construida con React que simula las funcionalidades básicas de un e-commerce. Permite a los usuarios explorar un catálogo de productos, buscar artículos específicos, y a los administradores (usuarios logueados) gestionar los productos, como actualizarlos o eliminarlos.</p>
        </section>


        <section>
            <h2>¿A quién está dirigido?</h2>
            <p>Está dirigido a un público general interesado en la tecnología y las compras online. La interfaz ha sido diseñada para ser intuitiva y fácil de usar.</p>
        </section>

    </Layout>
            );
};

export { About };