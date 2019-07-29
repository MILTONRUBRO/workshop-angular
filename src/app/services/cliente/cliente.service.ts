import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente';

const apiUrl = 'https://workshop-mongodb.herokuapp.com/users';

@Injectable()
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(apiUrl);
  }
}
