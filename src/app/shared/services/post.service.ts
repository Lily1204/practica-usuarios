import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/home/models/post';

@Injectable()
    export class PostService {
        url: string;
    constructor(private http: HttpClient) {
        this.url = `https://jsonplaceholder.typicode.com/posts`;
    }

    getAllPosts() {
        return this.http.get<Post[]>(this.url);

    }
    getByIdUser(id) {
        return this.http.get<Post[]>(this.url + `?userId=${id}`);
      }
}
