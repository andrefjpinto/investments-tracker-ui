import { Component, OnInit } from '@angular/core';
import { Broker } from './models/broker.model';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { selectAllBrokers } from './state/brokers.selectors';
import { State } from '../reducers';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss'],
})
export class BrokersComponent implements OnInit {
  brokers$: Observable<Broker[]> | undefined = this.store.select(selectAllBrokers);

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch({ type: '[Brokers] Load Brokers' });
  }
}
