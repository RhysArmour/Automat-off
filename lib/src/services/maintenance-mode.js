"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebMaintenanceStatus = exports.getMobileMaintenanceStatus = void 0;
const getMobileMaintenanceStatus = async () => {
    // call to param store
    let paramValue;
    if ((paramValue === 0)) {
        return {
            status: 200,
            message: 'Successfully hit endpoint',
            outageState: 'Outage Off',
        };
    }
    if ((paramValue === 1)) {
        return {
            status: 503,
            message: 'Successfully hit endpoint',
            outageState: 'Outage On',
        };
    }
};
exports.getMobileMaintenanceStatus = getMobileMaintenanceStatus;
const getWebMaintenanceStatus = async () => {
    // call to param store
    let paramValue;
    if ((paramValue === 'ONLINE')) {
        return {
            status: 200,
            message: 'Successfully hit endpoint',
            outageState: 'Outage Off',
        };
    }
    if ((paramValue === 'OFFLINE')) {
        return {
            status: 503,
            message: 'Successfully hit endpoint',
            outageState: 'Outage On',
        };
    }
};
exports.getWebMaintenanceStatus = getWebMaintenanceStatus;
//# sourceMappingURL=maintenance-mode.js.map