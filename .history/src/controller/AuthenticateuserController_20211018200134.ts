import { Request, Response } from "express";
import { AuthenticateuserService } from "../services/AuthennticateUserService";

class AuthenticateuseController{
    async handle(request: Request, response: Response){
        const service = new AuthenticateuserService
    }
}


export { AuthenticateuseController }