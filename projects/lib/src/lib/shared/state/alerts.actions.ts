import { createAction, props } from '@ngrx/store';
import { Alert } from '../model/alert';

export const loadAlert = createAction(
  '[Alerts] Load Alert',
  props<{data: Alert}>()
);

export const removeAlert = createAction(
  '[Alerts] Remove',
  props<{data: Alert}>()
);
