"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const validate_route_1 = require("./src/routes/validate-route");
const cors_1 = __importDefault(require("cors"));
const maintenance_mode_route_1 = require("./src/routes/maintenance-mode-route");
exports.app = (0, express_1.default)();
exports.routes = express_1.default.Router();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(validate_route_1.validateRouter);
exports.app.use(maintenance_mode_route_1.maintenanceModeRouter);
//# sourceMappingURL=app.js.map