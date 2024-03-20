"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_service_1 = require("../../src/services/validator-service");
jest.mock('axios');
describe('validatorService', () => {
    it('should validate a valid Jira ticket URL', async () => {
        const jiraTicketURL = 'RFC-65855';
        const isValid = await (0, validator_service_1.validateJiraTicket)(jiraTicketURL).then((response) => expect(response).toBe(201));
        // expect(isValid).toBe(true);
    });
});
//# sourceMappingURL=validator.test.js.map