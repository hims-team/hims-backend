"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (request, response) => {
    return response.status(200).json({
        status: 'success',
        message: 'HIMS - home route',
        data: [],
    });
});
router.get('/dummyRoute', (request, response) => {
    return response.status(200).json({
        status: 'success',
        message: 'this is a dummy route',
        data: [
            {
                userId: '-Lap3GBWSnuOBYZp1ZpF',
                roleId: '-Lap3G59CKqnPcO3gw0f',
                email: 'dummy-user.user@mail.com',
                createdAt: '2019-09-28T10:55:51.603Z',
                centerDetails: {
                    hospitalId: 'Lap4HGTnuOBYZp1ZpF',
                    hospitalDetails: [],
                },
            },
        ],
    });
});
exports.default = router;
