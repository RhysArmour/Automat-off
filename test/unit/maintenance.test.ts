import { getMobileMaintenanceStatus } from '../../src/services/maintenance-mode';

jest.mock('axios');

describe('validatorService', () => {
  it('should validate a valid Jira ticket URL', async () => {
    const isValid = await getMobileMaintenanceStatus();

    console.log(isValid)
    expect(isValid).toBe(true);
  });
});

