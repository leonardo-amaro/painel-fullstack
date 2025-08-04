"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promises_1 = __importDefault(require("dns/promises"));
const router = express_1.default.Router();
router.get('/:domain', async (req, res) => {
    const { domain } = req.params;
    const [ip] = await promises_1.default.resolve4(domain);
    try {
        const [a, aaaa, cname, mx, ns, ptr] = await Promise.all([
            promises_1.default.resolve4(domain).catch(() => []),
            promises_1.default.resolve6(domain).catch(() => []),
            promises_1.default.resolveCname(domain).catch(() => []),
            promises_1.default.resolveMx(domain).catch(() => []),
            promises_1.default.resolveNs(domain).catch(() => []),
            promises_1.default.reverse(ip).catch(() => []),
        ]);
        res.json({ domain, a, aaaa, cname, mx, ns, ptr });
    }
    catch (err) {
        res.status(500).json({ error: 'Erro ao consultar DNS', detail: err.message });
    }
});
exports.default = router;
