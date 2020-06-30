import { createReducer, on } from '@ngrx/store';
import { Alert } from '../model/alert';
import * as AlertsActions from './alerts.actions';

export const alertsFeatureKey = 'alerts';

export interface State {
  alerts: Alert[];
}

export const initialState: State = {
  alerts: []
};

export const reducer = createReducer(
  initialState,

  on(AlertsActions.loadAlert, (state, data) => {
    let alerts = state.alerts;
    alerts = Object.assign([]);
    alerts.push(data.data);
    return {...state, alerts};
  }),
  on(AlertsActions.removeAlert, (state, data) => {
    let alerts = Object.assign([], state.alerts);
    const idx = state.alerts.indexOf(data.data);
    if (idx > -1) {
      alerts.splice(idx, 1);
    }
    return {...state, alerts};
  }),

);

