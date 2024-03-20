"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 4000;
console.log(`Listening on port: ${port}`);
app_1.app.listen(port);
//# sourceMappingURL=index.js.map