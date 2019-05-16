"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./db/models/index"));
dotenv_1.default.config();
const PORT = process.env.PORT || 9000;
index_1.default.sequelize.sync().then(() => {
    app_1.default.on('error', (error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
    });
    app_1.default.on('listening', (listen) => {
        // tslint:disable-next-line:no-console
        console.log(listen);
    });
    app_1.default.listen(PORT, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server listening on port ${PORT} 🚀`);
    });
});
