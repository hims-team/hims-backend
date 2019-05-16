"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../db/models"));
const { User } = models_1.default;
/**
 * @description { user class }
 */
class UserRepository {
}
/**
 * @description method to create a new user
 *
 * @param { userDetails }
 *
 * return { user }
 */
UserRepository.createUser = (userDetails) => __awaiter(this, void 0, void 0, function* () {
    const { id, name, email, role } = userDetails;
    try {
        const user = yield User.create({ id, name, email, role });
        if (!user) {
            return null;
        }
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
/**
 * @description method to get details of a user
 *
 * @param { userDetails }
 *
 * return { user }
 */
UserRepository.getSingleUser = (userDetails) => __awaiter(this, void 0, void 0, function* () {
    const { id } = userDetails;
    try {
        const user = yield User.findOne(id);
        if (!user) {
            return null;
        }
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
/**
 * @description method to get details of all users
 *
 * return { user }
 */
UserRepository.getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield User.findAll();
        if (!user) {
            return null;
        }
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = UserRepository;
