import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlerts from './alerts.reducer';

export const selectAlertsState = createFeatureSelector<fromAlerts.State>(
  fromAlerts.alertsFeatureKey
);

export const selectAlerts = createSelector(selectAlertsState, (state) => {
  return state?.alerts
});
