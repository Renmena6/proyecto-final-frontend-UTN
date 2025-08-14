import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import '../styles/pages/Home.css';

const Home = () => {
  const [products, setProducts] = useState([])
  const [showPopup, setShowPopup] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")
  const [search, setSearch] = useState("");

  const { user } = useAuth()

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })
    if (response.ok) {
      setProducts(prevProduct => prevProduct.filter((product) => product.id !== id))
    }
  }

  const handleOpenEdit = (product) => {
    setShowPopup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      })
      if (response.ok) {
        const data = await response.json()
        setProducts(prevProduct =>
          prevProduct.map((product) =>
            product.id === productToEdit.id
              ? data
              : product
          ))
      }
      setShowPopup(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
 // render para validar si no hay coincidencia de busqueda
  const renderProductGrid = () => {
    if (filteredProducts.length === 0) {
      return <p>No se encontraron productos 😩.</p>
    } else {
      return filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.title}</h2>
          <img  src={product.image} alt={`Imagen de ${product.title}`} />
          <p>${product.price}</p>
          <p className="product-description">{product.description}</p> 
          <p><strong>{product.category}</strong></p>
          {
              user && 
              <div className="product-card-buttons">
                <button className="edit-btn" onClick={() => handleOpenEdit(product)}>Actualizar</button>
                <button className="delete-btn" onClick={() => handleDelete(product.id)}>Borrar</button>
              </div>
}
        </div>
      ))
    }
  }

return (
    <Layout>
    <section className="hero-section">
      <h1>Bienvenido a UTN Shop</h1>
      <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
    </section>

    <section className="benefits-section">
      <h2>¿Por qué elegirnos?</h2>
      <ul>
        <li>
          <h3>Envíos a todo el país</h3>
          <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
        </li>
        <li>
          <h3>Pagos seguros</h3>
          <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
        </li>
        <li>
          <h3>Atención personalizada</h3>
          <p>Estamos disponibles para ayudarte en todo momento.</p>
        </li>
      </ul>
    </section>


    <section className="products-section">
      <h2>Nuestros productos</h2>
      <p>Elegí entre nuestras categorías más populares.</p>
      
      <input 
        type="text" 
        className="search-input"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {showPopup && 
        <div className="popup-backdrop">
          <div className="popup-content">
            <h2>Editando producto.</h2>
            <button className="close-btn" onClick={() => setShowPopup(null)}>X</button>
            <form className="edit-form" onSubmit={handleUpdate}>
              <div className="form-group">
                <input type="text" placeholder="Ingrese el titulo" value={titleEdit} onChange={(e) => setTitleEdit(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="number" placeholder="Ingrese el precio" value={priceEdit} onChange={(e) => setPriceEdit(e.target.value)} />
              </div>
              <div className="form-group">
                <textarea placeholder="Ingrese la descripción" value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Ingrese la categoria" value={categoryEdit} onChange={(e) => setCategoryEdit(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Ingrese la URL de la imagen" value={imageEdit} onChange={(e) => setImageEdit(e.target.value)} />
              </div>
              <button>Actualizar</button>
            </form>
          </div>
        </div>
      }

      <div className="products-container">
        <div className="product-grid">
          {renderProductGrid()}
        </div>
      </div>
    </section>
  </Layout>
  )
}

export { Home }