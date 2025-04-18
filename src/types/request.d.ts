// Pega o namespace do Express
declare namespace Express {
    // Adiciona propriedades que queremos incluir
    export interface Request{
        user_id: string
    }
}

