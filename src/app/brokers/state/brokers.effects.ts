// Path: src/app/brokers/state/brokers.actions.ts
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { concatMap, map, catchError, of } from 'rxjs';
import { BrokersService } from '../services/brokers.service';
import {
  loadBrokers,
  loadBrokersSuccess,
  loadBrokersFailure,
} from './brokers.actions';

@Injectable()
export class BrokersEffects {
  constructor(
    private actions$: Actions,
    private brokersService: BrokersService
  ) {}
  loadBrokers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrokers),
      concatMap(() =>
        this.brokersService.getAllBrokers().pipe(
          map((brokers) => loadBrokersSuccess({ brokers })),
          catchError((error) => of(loadBrokersFailure({ error })))
        )
      )
    )
  );
}
