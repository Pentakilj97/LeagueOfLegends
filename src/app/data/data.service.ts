import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'URL_DELLE_TUO_API'; // URL dell'API
  private apiKey = 'RGAPI-71d963c3-3c5b-43fe-945e-185a430be185'; // La tua token API

  constructor(private http: HttpClient) {}

  fetchData() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.apiKey // Aggiungi la tua token come header Authorization
    });

    this.http.get(this.apiUrl, { headers }).subscribe(
      (data) => {
        console.log(data); // Stampa il contenuto dell'API nella console
      },
      (error) => {
        console.error(error);
      }
    );
  }
}