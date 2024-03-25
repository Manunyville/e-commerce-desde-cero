// PRODUCTOS
const productos = [
    // IMPERIALES
    {
        id: "imperial-01",
        titulo: "Imperial cincelado en alpaca",
        imagen: "./img/imperiales/impealpaca.jpeg",
        categoria: {
            nombre: "Imperiales",
            id: "imperiales"
        },
        precio: 1000
    },
    {
        id: "imperial-02",
        titulo: "Imperial de ceramica",
        imagen: "./img/imperiales/impeceramica.jpeg",
        categoria: {
            nombre: "Imperiales",
            id: "imperiales"
        },
        precio: 1000
    },
    {
        id: "imperial-03",
        titulo: "Imperial de alpaca en cuero crudo",
        imagen: "./img/imperiales/impecrudoabs.jpeg",
        categoria: {
            nombre: "Imperiales",
            id: "imperiales"
        },
        precio: 1000
    },
    {
        id: "imperial-04",
        titulo: "Impeial crudo con posamate",
        imagen: "./img/imperiales/impecrudoposa.jpeg",
        categoria: {
            nombre: "Imperiales",
            id: "imperiales"
        },
        precio: 1000
    },
    {
        id: "imperial-05",
        titulo: "Imperial en cuero rosa",
        imagen: "./img/imperiales/imperosa.jpeg",
        categoria: {
            nombre: "Imperiales",
            id: "imperiales"
        },
        precio: 1000
    },
    // Torpedos
    {
        id: "torpedo-01",
        titulo: "Torpedo cincelado en alpaca",
        imagen: "./img/torpedos/torpedoalpaca.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    {
        id: "torpedo-02",
        titulo: "Torpedo cincelado al lacre, cuero natural",
        imagen: "./img/torpedos/torpelacrenatural.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    {
        id: "torpedo-03",
        titulo: "Torpedo imperial cuero crudo",
        imagen: "./img/torpedos/torpedoimperial.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    {
        id: "torpedo-04",
        titulo: "Torpedo imperial cuero croco",
        imagen: "./img/torpedos/torpeimpecroco.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    {
        id: "torpedo-05",
        titulo: "Torpedo cuero pelota",
        imagen: "./img/torpedos/torpedopelota.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    {
        id: "torpedo-06",
        titulo: "Torpedo cincelado al lacre",
        imagen: "./img/torpedos/torpedolacre.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    {
        id: "torpedo-07",
        titulo: "Torpedo imperial cuero crudo con base",
        imagen: "./img/torpedos/torpedoimperial.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    {
        id: "torpedo-08",
        titulo: "Torpedo cincelado en alpaca",
        imagen: "./img/torpedos/torpedoalpaca.jpeg",
        categoria: {
            nombre: "Torpedos",
            id: "torpedos"
        },
        precio: 1000
    },
    // CAMIONEROS
    {
        id: "camionero-01",
        titulo: "Camionero ",
        imagen: "./img/camioneros/camioneroalpaca01.jpeg",
        categoria: {
            nombre: "Camioneros",
            id: "camioneros"
        },
        precio: 1000
    },
    {
        id: "camionero-02",
        titulo: "Camionero 02",
        imagen: "./img/camioneros/camioneroalpaca01.jpeg",
        categoria: {
            nombre: "Camioneros",
            id: "camioneros"
        },
        precio: 1000
    },
    {
        id: "camionero-03",
        titulo: "Camionero cincelado en alpaca",
        imagen: "./img/camioneros/camioneroalpaca02.jpeg",
        categoria: {
            nombre: "Camioneros",
            id: "camioneros"
        },
        precio: 1000
    },
    {
        id: "camionero-04",
        titulo: "Camionero 04",
        imagen: "./img/camioneros/camioneroalpaca01.jpeg",
        categoria: {
            nombre: "Camioneros",
            id: "camioneros"
        },
        precio: 1000
    },
    {
        id: "camionero-05",
        titulo: "Camionero 05",
        imagen: "./img/camioneros/camioneroalpaca02.jpeg",
        categoria: {
            nombre: "Camioneros",
            id: "camioneros"
        },
        precio: 1000
    },
    // BOMBILLAS
    {
        id: "bombilla-01",
        titulo: "Bombillon de alpaca con pico en bronce",
        imagen: "./img/bombillas/bombipicoloro.jpeg",
        categoria: {
            nombre: "Bombillas",
            id: "bombillas"
        },
        precio: 1000
    },
    {
        id: "bombilla-02",
        titulo: "Bombillon de alpaca",
        imagen: "./img/bombillas/bombisalpaca.jpeg",
        categoria: {
            nombre: "Bombillas",
            id: "bombillas"
        },
        precio: 1000
    },
    {
        id: "canasta-01",
        titulo: "Canasta de cuero crudo, manija cocida al tiento",
        imagen: "./img/canastas/Canastacruda02.jpeg",
        categoria: {
            nombre: "Canastas",
            id: "canastas"
        },
        precio: 1000
    },
    {
        id: "canasta-02",
        titulo: "Canasta de cuero crudo, manija de tiento",
        imagen: "./img/canastas/Canastacrudo01.jpeg",
        categoria: {
            nombre: "Canastas",
            id: "canastas"
        },
        precio: 1000
    },
    {
        id: "canasta-03",
        titulo: "Canasta de cuero, 4 espacios",
        imagen: "./img/canastas/Canastacuero01.jpeg",
        categoria: {
            nombre: "Canastas",
            id: "canastas"
        },
        precio: 1000
    },
];

const contenedorProductos = document.getElementById('contenedorProductos');
// const botonCategorias = document.querySelectorAll ('.boton-categoria');
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.getElementById('titulo-principal')
let botonesAgregar = document.querySelectorAll(".producto-agregar");

const cargarProductos = (productosElegidos) => {

    contenedorProductos.innerHTML= ''

    productosElegidos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <img class="producto-imagen" src=${producto.imagen} alt=${producto.titulo}>
        <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id"${producto.id}" >Agregar</button>`;

        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);



    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) =>{
            
            botonesCategorias.forEach(boton => boton.classList.remove("active"))
            
            e.currentTarget.classList.add("active");

            if(e.currentTarget.id != 'todos'){
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;

                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            } else {
                tituloPrincipal.innerText = "Todos los productos"
                cargarProductos(productos)
            }
            
        })
    })
    

const actualizarBotonesAgregar = () => {
    botonesAgregar = document.querySelectorAll('.producto-agregar')

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarCarrito)
    })
}

const productosEnCarrito = [];

const agregarCarrito = () => {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    productosEnCarrito.push(productoAgregado)
    console.log(productosEnCarrito);
}
