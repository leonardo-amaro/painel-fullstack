"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupWhois = lookupWhois;
exports.lookupWhoisJson = lookupWhoisJson;
exports.nationalWhois = nationalWhois;
// @ts-ignore
const whois_1 = __importDefault(require("whois"));
const whois_json_1 = __importDefault(require("whois-json"));
function lookupWhois(domain) {
    return new Promise((resolve, reject) => {
        whois_1.default.lookup(domain, (err, data) => {
            if (err)
                return reject(err);
            resolve(data);
        });
    });
}
async function lookupWhoisJson(domain) {
    try {
        const data = await (0, whois_json_1.default)(domain);
        return data;
    }
    catch (error) {
        console.error('Erro ao buscar WHOIS:', error);
    }
}
async function nationalWhois(domain) {
    try {
        const response = await fetch(`https://rdap.registro.br/domain/${domain}`).then((result) => result.json());
        return response;
    }
    catch (error) {
        console.error("Erro de consulta Whois Nacional: ", error);
    }
}
