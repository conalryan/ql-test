import * as fromAlerts from './alerts.actions';

describe('loadAlertss', () => {
  it('should return an action', () => {
    expect(fromAlerts.loadAlert({data: {type: 'success', message: 'Great'}}).type).toBe('[Alerts] Load Alert');
  });
});
