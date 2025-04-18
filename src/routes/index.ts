// Importando o Router do Express
import { Router } from "express";

// Importando nossa productRoutes
import { productsRoutes } from "./products-routes.js";

// Inicializa o Router
const routes = Router()

// Define o endereço e a rota a ser carregada
routes.use("/products", productsRoutes)

export {routes}

