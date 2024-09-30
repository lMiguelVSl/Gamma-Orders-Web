import { HttpClient } from "@angular/common/http";
import { Endpoints } from "..";
import { environment } from "../../../environment";
import { Injectable } from "@angular/core";
import { Order } from "./models";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) { }

    getOrders() {
        return this.http.get<Order[]>(`${environment.restaurantUrl}${Endpoints.Order.getOrders.path()}`);
    }

    getOrdersByClientId(id: string) {
        return this.http.get<Order[]>(`${environment.restaurantUrl}${Endpoints.Order.getOrders.path()}/${id}`);
    }

    postOrders(order: Order) {
        return this.http.post(`${environment.restaurantUrl}${Endpoints.Order.createOrder.path()}`, order);
    }

}