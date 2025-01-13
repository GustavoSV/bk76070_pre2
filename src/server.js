import express from 'express';
import { productsRouter } from './routes/products.routes.js';
import { cartsRouter } from './routes/carts.routes.js';
import { __dirname } from './dirname.js';
import path from 'path';

const app = express();
const PORT = 8080;

// Server initialization
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// App configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public con ruta absoluta
app.use(express.static(path.resolve(__dirname, '../public')));

// Routes - API endpoints
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);