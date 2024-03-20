import { validateJiraTicket } from '../../src/services/validator-service';

jest.mock('axios');

describe('validatorService', () => {
  it('should validate a valid Jira ticket URL', async () => {
    const jiraTicketURL = 'RFC-65855';
    const isValid = await validateJiraTicket(jiraTicketURL).then((response) => expect(response).toBe(201));

    // expect(isValid).toBe(true);
  });
});
