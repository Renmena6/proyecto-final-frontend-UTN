#  FakeStore App

##  Objetivo general

Este proyecto es una aplicación web que simula una tienda en línea utilizando datos de la API pública FakeStore API(https://fakestoreapi.com/). El objetivo principal es practicar el consumo de APIs, la manipulación del DOM con React y la implementación de funcionalidades básicas de CRUD 
---

##  Funcionalidades implementadas

-----Página de Inicio : Muestra el catálogo completo de productos obtenidos de una API externa. Incluye una barra de búsqueda funcional que permite filtrar productos por nombre.

-----Página "Sobre Nosotros": Proporciona información sobre el proyecto, sus objetivos y las tecnologías utilizadas en su desarrollo.

-----Autenticación de Usuarios: Incluye formularios de inicio de sesión (Login) y registro (Register) con validaciones de formulario robustas para asegurar la calidad de los datos.

-----Rutas Privadas: Protege el accesoo de rutas sensibles para que solo puedan ser accedidas por usuarios autenticados.

----- Dashboard: Permite a los usuarios registrados  cargar nuevos productos.

-----Gestión de Productos: Los usuarios autenticados pueden editar y eliminar productos directamente desde la página de inicio.

-----Diseño Responsivo: El diseño se adapta correctamente a diferentes tamaños de pantalla (móvil, tablet y escritorio).

---------------------------------------------------------------------------------------------------------------------

## Instrucciones para Ejecutar Localmente

--Clonar el repositorio: Abre tu terminal y ejecuta el siguiente comando para clonar el proyecto desde tu cuenta de GitHub.

----git clone https://github.com/Renmena6/proyecto-final-frontend-UTN.git


--Instalar las dependencias: Navega hasta la carpeta del proyecto e instala todas las dependencias necesarias.

----cd tu-repositorio
---- npm install
----Iniciar la aplicación: Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo.
----npm run dev
----Abrir en el navegador: La aplicación estará disponible en http://localhost:5173 (o un puerto similar).


###### aclaraciones 

Hay cosas que tuve que investigar, por que no sabia como implementarlas. Utilice como manejador de de errores Try y Catch: try ejecuta errores y catch captura cuando hay algun error y lo maneja en lugar de que ocurra algo inesperado o se rompa en la aplicacion. 
Tambien utilice Regex como PasswordRegex, que sirve para simplificar y hacer mas robusta las validaciones. Sin Regex Me hubiera llevado muchas líneas de codigo con if por ejemplo



