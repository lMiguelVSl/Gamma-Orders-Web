import { Dish } from "./Dish.type";

export interface Restaurant { 
    idRestaurante: number;
    nombre: string;
    email: string;
    platos: Dish[];
}