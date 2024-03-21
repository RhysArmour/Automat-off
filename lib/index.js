"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const app_1 = require("./app");
const handler = (event) => {
    console.log('IN HANDLER:', event);
    const port = process.env.PORT || 4000;
    console.log(`Listening on port: ${port}`);
    app_1.app.listen(port);
};
exports.handler = handler;
//# sourceMappingURL=index.js.map