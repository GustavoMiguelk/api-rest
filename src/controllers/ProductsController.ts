import { Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { z } from "zod";

export class ProductsController {
    // Métodos que um Controller deve ter

    /**
     * index - GET para listar vários registros.
     * show - GET para exibir apenas um registro específico.
     * create - POST pra criar um novo produto.
     * update - PUT para atualizar um registro.
     * remove - DELETE para deletar um registro.
     */

    index(request: Request, response: Response){
        const { page, limit } = request.query
        
        response.send(`Página ${page} de ${limit}`)
    }

    create(request: Request, response: Response){
        // Definindo os valores que devem ser impressos com o Zod
        const bodySchema = z.object({
            name: z
                .string({ required_error: "Name is required"})
                .trim()
                .min(6, { message: "Name Must be 6 or more characters"}),

            price: z
                .number({ required_error: "Price is required"})
                .positive({ message: "Price must be positive" }),
        })

        // Desestruturando e capturando os valores para serem utilizados
        const { name, price } = bodySchema.parse(request.body)

        /*
        if(!name){
            throw new AppError("O Nome produto é obrigatório!")
        }

        if(name.trim().length < 6){
            throw new AppError("O Nome do produto precisa ter pelo menos 6 caracteres!")
        }

        if(!price){
            throw new AppError("O Preço produto é obrigatório!")
        }

        if(price < 0){
            throw new AppError("O preço não pode ser menor do que zero!")
        }
        */

        // throw new Error("Erro de Inserção!")
        // throw new AppError("Erro de Inserção!")

        response.status(201).json({ name, price, user_id: request.user_id })
    }
}

