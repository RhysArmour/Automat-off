"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenanceModeRouter = void 0;
const express_1 = require("express");
const maintenance_mode_1 = require("../services/maintenance-mode");
exports.maintenanceModeRouter = (0, express_1.Router)();
exports.maintenanceModeRouter.get('/v1/maintenance-mode', async (req, res) => {
    console.log('beginning maintenanceMode check');
    let result = {
        status: 404,
        message: 'Invalid platform provided',
        outageState: 'Not Available'
    };
    if (req.body.platform === 'Mobile') {
        result = await (0, maintenance_mode_1.getMobileMaintenanceStatus)();
    }
    if (req.body.platform === 'Web') {
        result = await (0, maintenance_mode_1.getWebMaintenanceStatus)();
    }
    res.send(result);
});
//# sourceMappingURL=maintenance-mode-route.js.map