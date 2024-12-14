import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FilesService {

    constructor (
        private httpClient: HttpClient
    ) {}

    getFileData(filename: string): Observable<any[]> {
        return this.httpClient.get<any[]>(`assets/supermarket/${filename}.json`)
    }
}