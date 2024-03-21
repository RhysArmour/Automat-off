"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebMaintenanceStatus = exports.getMobileMaintenanceStatus = exports.getParamValue = void 0;
const client_ssm_1 = require("@aws-sdk/client-ssm");
const client = new client_ssm_1.SSMClient();
const getParamValue = async (route) => {
    if (route === 'Mobile') {
        const input = {
            Name: '/mobile/maintenance', // required
        };
        const command = new client_ssm_1.GetParameterCommand(input);
        const response = await client.send(command);
        console.log(response.Parameter.Value);
        return response.Parameter.Value;
    }
    if (route === 'Web') {
        const input = {
            Name: '/web/maintenance', // required
        };
        const input2 = {
            Name: '/web/maintenance-two',
        };
        const command = new client_ssm_1.GetParameterCommand(input);
        const command2 = new client_ssm_1.GetParameterCommand(input2);
        const response = await client.send(command);
        const response2 = await client.send(command2);
        const result = response.Parameter.Value + response2.Parameter.Value;
        return result;
    }
};
exports.getParamValue = getParamValue;
const getMobileMaintenanceStatus = async () => {
    const param = await (0, exports.getParamValue)('Mobile');
    if (+param === 0) {
        return {
            status: 200,
            message: 'Successfully hit endpoint',
            outageState: 'Outage Off',
        };
    }
    if (+param === 1) {
        return {
            status: 503,
            message: 'Successfully hit endpoint',
            outageState: 'Outage On',
        };
    }
};
exports.getMobileMaintenanceStatus = getMobileMaintenanceStatus;
const getWebMaintenanceStatus = async () => {
    const param = await (0, exports.getParamValue)('Web');
    if (param.includes('ONLINE')) {
        return {
            status: 200,
            message: 'Successfully hit endpoint',
            outageState: 'Outage Off',
        };
    }
    if (param.includes('OFFLINE')) {
        return {
            status: 503,
            message: 'Successfully hit endpoint',
            outageState: 'Outage On',
        };
    }
};
exports.getWebMaintenanceStatus = getWebMaintenanceStatus;
//# sourceMappingURL=maintenance-mode.js.map