"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = __importDefault(require("./home"));
const router = express_1.Router();
// add your router function here
router.use('/', home_1.default);
router.use('*', (request, response) => {
    return response.status(404).json({
        status: 'error',
        message: 'Oops, page not found',
    });
});
exports.default = router;
