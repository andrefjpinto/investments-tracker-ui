import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Broker } from '../models/broker.model';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllBrokers(): Observable<Broker[]> {
    return this.http.get<Broker[]>('http://127.0.0.1:3000/brokers');
  }

}
