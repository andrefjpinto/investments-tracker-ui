// Path: src/app/brokers/brokers.reducers.ts
import { Action, createReducer, on } from '@ngrx/store';
import { Broker } from '../models/broker.model';
import {
  loadBrokers,
  loadBrokersFailure,
  loadBrokersSuccess,
} from './brokers.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export const brokersFeatureKey = 'brokers';
export const adapter: EntityAdapter<Broker> = createEntityAdapter<Broker>();

export interface BrokersState extends EntityState<Broker> {
  loading: boolean;
}

export const initialState = adapter.getInitialState({
  coursesLoaded: false,
});

export const brokersReducer = createReducer(
  initialState,
  on(loadBrokers, (state) => {
    console.log('Loading brokers...');
    return { ...state, loading: true };
  }),
  on(loadBrokersSuccess, (state, { brokers }) => {
    console.log('Loading brokers success!');
    return adapter.addMany(brokers, { ...state, loading: false });
  }),
  on(loadBrokersFailure, (state, { error }) => {
    console.log('Loading brokers failure!');
    return { ...state, loading: false, error };
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
