"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const demo_file_1 = __importDefault(require("../demo/demo.file"));
const { expect } = chai_1.default;
chai_1.default.use(chai_http_1.default);
describe('This is a demo test', () => {
    it('should return a true', (done) => {
        expect(true).equal(true);
        done();
    });
});
describe('area of a triangle', () => {
    it('should find the area of a triangle', (done) => {
        expect(demo_file_1.default(4, 5)).equal(10);
        done();
    });
});
