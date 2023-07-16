// Path: src/app/brokers/brokers.actions.ts
import { createAction, props } from '@ngrx/store';
import { Broker } from '../models/broker.model';

export const loadBrokers = createAction('[Brokers] Load Brokers');

export const loadBrokersSuccess = createAction(
    '[Brokers] Load Brokers Success',
    props<{ brokers: Broker[] }>()
);

export const loadBrokersFailure = createAction(
    '[Brokers] Load Brokers Failure',
    props<{ error: any }>()
);

export const courseActionTypes = {
    loadBrokers,
    loadBrokersSuccess,
    loadBrokersFailure
  };
  