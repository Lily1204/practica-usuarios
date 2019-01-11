import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../home/models/user';

@Injectable()
    export class UserService {
        url: string;
    constructor(private http: HttpClient) {
        this.url = `https://jsonplaceholder.typicode.com/users`;
    }

    getAll() {
        return this.http.get<Users[]>(this.url);

    }
}
