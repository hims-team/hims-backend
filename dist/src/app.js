"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const graphql_1 = require("graphql");
const mutation_1 = __importDefault(require("../graphql/mutation"));
const queries_1 = __importDefault(require("../graphql/queries"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        dotenv_1.default.config();
        this.app.use(cors_1.default());
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        const schema = new graphql_1.GraphQLSchema({
            query: queries_1.default,
            mutation: mutation_1.default,
        });
        // routes
        this.app.use('/api/v1', routes_1.default);
        this.app.use('/', express_graphql_1.default({
            schema,
            graphiql: true,
        }));
    }
}
exports.default = new App().app;
