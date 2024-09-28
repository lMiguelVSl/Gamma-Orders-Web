import { Dish } from "./Dish.type";

export interface Restaurant { 
    id: number;
    name: string;
    dishes: Dish[];
}