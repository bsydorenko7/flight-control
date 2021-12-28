import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChekingTicketService {

  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getInformation(id: String): Observable<boolean> {
    return this.http.get<boolean>(this.rootUrl + '/api/' + id)
  }
}
