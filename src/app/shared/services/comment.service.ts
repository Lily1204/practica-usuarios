import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../../home/models/comment';

@Injectable()
    export class CommentService {
        url: string;
    constructor(private http: HttpClient) {
        this.url = `https://jsonplaceholder.typicode.com/comments`;
    }

    getAllComment() {
        return this.http.get<Comment[]>(this.url);

    }
}
