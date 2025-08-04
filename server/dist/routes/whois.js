"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const whois_1 = require("../utils/whois");
const parseWhois_1 = require("../utils/parseWhois");
const router = express_1.default.Router();
router.get('/:domain', async (req, res) => {
    const { domain } = req.params;
    if (domain.endsWith(".br")) {
        try {
            const whoisBr = await (0, whois_1.nationalWhois)(domain);
            const parsed = (0, parseWhois_1.parseWhoisBr)(whoisBr);
            res.json({ domain, whois: parsed });
        }
        catch (err) {
            res.status(500).json({ error: 'Erro ao consultar WHOIS Nacional', detail: err.message });
        }
    }
    else {
        try {
            const rawWhois = await (0, whois_1.lookupWhoisJson)(domain);
            const parsed = (0, parseWhois_1.parseWhoisJson)(rawWhois);
            res.json({ domain, whois: rawWhois });
        }
        catch (err) {
            res.status(500).json({ error: 'Erro ao consultar WHOIS', detail: err.message });
        }
    }
});
exports.default = router;
