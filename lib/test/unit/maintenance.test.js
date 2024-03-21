"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const maintenanceMode = __importStar(require("../../src/services/maintenance-mode"));
const paramMock = jest.spyOn(maintenanceMode, 'getParamValue');
describe('maintenanceService', () => {
    it('When Param value is 1 for Mobile, it returns 503 OFF', async () => {
        paramMock.mockResolvedValue('1');
        const result = await maintenanceMode.getMobileMaintenanceStatus();
        console.log(result);
        expect(result).toStrictEqual({
            status: 503,
            message: 'Successfully hit endpoint',
            outageState: 'Outage On',
        });
    });
    it('When Param value is 1 for Mobile, it returns 200 ON', async () => {
        paramMock.mockResolvedValue('0');
        const result = await maintenanceMode.getMobileMaintenanceStatus();
        console.log(result);
        expect(result).toStrictEqual({
            status: 200,
            message: 'Successfully hit endpoint',
            outageState: 'Outage Off',
        });
    });
});
//# sourceMappingURL=maintenance.test.js.map