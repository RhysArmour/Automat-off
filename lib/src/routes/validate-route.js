"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRouter = void 0;
const express_1 = require("express");
const validator_service_1 = require("../services/validator-service");
exports.validateRouter = (0, express_1.Router)();
exports.validateRouter.get('/v1/validate', async (req, res) => {
    console.log('beginning validate');
    if (req.body == undefined) {
        return 400;
    }
    const result = await (0, validator_service_1.validateJiraTicket)(req.body.jiraTicket);
    console.log(result);
    if (result === 201) {
        res.send('Jira ticket is valid');
    }
    else {
        res.send('Jira ticket is not valid');
    }
});
//# sourceMappingURL=validate-route.js.map