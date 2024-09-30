import { Dish, User } from "../..";

export interface Order {
    idPedido?: number;
    cliente: User;
    estado: string;
    platos: Dish[];
}