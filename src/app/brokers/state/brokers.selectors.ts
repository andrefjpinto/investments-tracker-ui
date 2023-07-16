// Path: src/app/brokers/brokers.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BrokersState, brokersFeatureKey, selectAll } from './brokers.reducers';

export const selectBrokersState =
  createFeatureSelector<BrokersState>('brokers');

export const selectAllBrokers = createSelector(selectBrokersState, selectAll);

export const areBrokersLoaded = createSelector(
  selectBrokersState,
  (state) => state.loading
);
