// Importando o Router do Express
import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware.js";
import { ProductsController } from "../controllers/ProductsController.js";

const productsRoutes = Router()

// Instancia a Classe
const productsController = new ProductsController()

// Rota de Exibir
productsRoutes.get("/", productsController.index)

// Rota de Adicionar
productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes }

