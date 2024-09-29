import { HttpClient } from "@angular/common/http";
import { Endpoints, User } from "..";
import { environment } from "../../../environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>(`${environment.baseUrl}${Endpoints.User.getUsers.path()}`);
    }

    createUser(User: User) {
        return this.http.post<number>(`${environment.baseUrl}${Endpoints.User.createUser.path()}`, User);
    }

    updateUser(User: User) {
        return this.http.put(`${environment.baseUrl}${Endpoints.User.updateUser.path()}`, User);
    }

}