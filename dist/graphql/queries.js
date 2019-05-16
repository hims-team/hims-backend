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
const graphql_1 = require("graphql");
const UserRepository_1 = __importDefault(require("../src/repository/UserRepository"));
const types_1 = require("./types");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        getSingleUser: {
            type: types_1.UserType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const user = yield UserRepository_1.default.getSingleUser(args.id);
                        return user;
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                });
            },
        },
        getAllUsers: {
            type: new graphql_1.GraphQLList(types_1.UserType),
            resolve(parentValue, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const user = yield UserRepository_1.default.getAllUsers();
                        return user;
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                });
            },
        },
    }),
});
exports.default = RootQuery;
