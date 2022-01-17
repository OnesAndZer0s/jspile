"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deobfuscate = void 0;
const t = __importStar(require("@babel/types"));
const b = __importStar(require("@babel/core"));
const generator_1 = __importDefault(require("@babel/generator"));
const fs_1 = __importDefault(require("fs"));
const posix_1 = __importDefault(require("path/posix"));
function deobfuscate({ input, output = "Deobf" + input, base = "/" }) {
    base = posix_1.default.normalize(base.toString());
    base += (base.toString()[base.toString().length - 1] == "/") ? "" : "/";
    console.log(posix_1.default.join(base, input.toString()));
    var parsed = b.transformFileSync(posix_1.default.join(base, input.toString()), { ast: true }).ast;
    b.traverse(parsed, {
        UnaryExpression(path) {
            if (path.node.operator == "!" && t.isNumericLiteral(path.node.argument) && ["0", "1"].includes(path.node.argument.extra.raw))
                path.replaceWith(t.booleanLiteral((path.node.argument.extra.raw == "0") ? true : false));
        }
    });
    var { code } = (0, generator_1.default)(parsed, {});
    console.log(parsed);
    fs_1.default.writeFileSync(posix_1.default.join(base, output.toString()), code, { flag: "w" });
    console.log("done");
}
exports.deobfuscate = deobfuscate;
deobfuscate({ base: "test/utils/samples/", input: "jQuery.js" });
