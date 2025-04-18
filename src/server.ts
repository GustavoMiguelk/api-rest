// Importando o Express
import express, { Request, Response, NextFunction }  from "express"

import { routes } from "./routes/index.js"

import { AppError } from "./utils/AppError.js"

import { ZodError } from "zod"

const PORT = 3333

const app = express()
app.use(express.json())

// Carrega nossas rotas
app.use(routes)

/**
 * 400 (Bad Request): Erro do Cliente.
 * 500 (Internal Server Error): Erro Interno do Servidor.
 */

app.use((error: any, _request: Request, response: Response, _: NextFunction):any => {
    if(error instanceof AppError){
        return response
        .status(error.statusCode)
        .json({message: error.message})
    }

    // Condicional que identifica se é um erro de validação do usuário.
    if(error instanceof ZodError){
        return response
        .status(400)
        .json({message: "Validation Error!", issues: error.format()})
    }

    response.status(500).json({ message: error.message})
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

