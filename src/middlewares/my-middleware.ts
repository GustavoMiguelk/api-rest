// Importa as tipagens.
import { Request, Response, NextFunction} from "express"

// Função que Importa as tipagens pedidas pelo Typescript
export function myMiddleware(request: Request, response: Response, next: NextFunction){
    request.user_id = "123456"
    console.log("Passou pelo Middleware!")

    // Retorna a função que encerra o Middleware
    return next()
}

