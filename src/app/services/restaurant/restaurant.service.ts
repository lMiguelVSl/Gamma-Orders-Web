import { HttpClient } from "@angular/common/http";
import { Endpoints, Restaurant } from "..";
import { environment } from "../../../environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    constructor(private http: HttpClient) { }

    getRestaurants() {
        return this.http.get<Restaurant[]>(`${environment.restaurantUrl}${Endpoints.Restaurant.getRestaurants.path()}`);
    }

}