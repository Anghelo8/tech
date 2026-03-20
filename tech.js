// ===============================
// CREAR BASE DE DATOS
// ===============================
use techstore_db


// ===============================
// INSERTAR CLIENTE
// ===============================
db.clientes.insertOne({
  codigo_cliente: "C001",
  nombre_completo: "Juan Perez",
  correo: "juan@mail.com",
  direccion: {
    calle: "Av. Arequipa 123",
    distrito: "Miraflores",
    provincia: "Lima",
    departamento: "Lima"
  },
  telefonos: ["999888777"]
})


// ===============================
// INSERTAR PRODUCTO
// ===============================
db.productos.insertOne({
  codigo_barras: "PROD-001",
  nombre: "Laptop Gamer RTX 3060",
  stock: 10,
  precio_lista: 3500
})


// ===============================
// INSERTAR PEDIDO (SNAPSHOT)
// ===============================
db.pedidos.insertOne({
  numero_pedido: 1001,
  fecha_hora: new Date(),
  codigo_cliente: "C001",
  detalle: [
    {
      codigo_barras: "PROD-001",
      nombre: "Laptop Gamer RTX 3060",
      cantidad: 1,
      precio_aplicado: 3450 // SNAPSHOT (precio congelado)
    }
  ]
})


// ===============================
// CONSULTAS
// ===============================

// Ver producto
db.productos.find({ codigo_barras: "PROD-001" })

// Ver pedido
db.pedidos.find({ numero_pedido: 1001 })


// ===============================
// ACTUALIZAR PRODUCTO
// ===============================
db.productos.updateOne(
  { codigo_barras: "PROD-001" },
  { $set: { precio_lista: 4000 } }
)


// ===============================
// VERIFICACIÓN FINAL (SNAPSHOT)
// ===============================

// Producto actualizado
db.productos.find({ codigo_barras: "PROD-001" })

// Pedido (NO cambia)
db.pedidos.find({ numero_pedido: 1001 })
