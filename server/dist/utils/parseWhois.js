"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseWhois = parseWhois;
exports.parseWhoisJson = parseWhoisJson;
exports.parseWhoisBr = parseWhoisBr;
function parseWhois(raw) {
    const getValue = (pattern) => {
        const match = raw.match(pattern);
        return match?.[1]?.trim();
    };
    const getValues = (pattern) => {
        return [...raw.matchAll(pattern)].map((m) => m[1].trim());
    };
    return {
        domainName: getValue(/Domain Name:\s*(.+)/i),
        registrar: getValue(/Registrar:\s*(.+)/i),
        creationDate: getValue(/Creation Date:\s*(.+)/i),
        expiryDate: getValue(/Expir(?:y|ation) Date:\s*(.+)/i),
        nameServers: getValues(/Name Server:\s*(.+)/gi),
    };
}
function parseWhoisJson(raw) {
    return {
        domainName: raw.domainName,
        registrar: raw.registrar,
        creationDate: raw.creationDate,
        expirationDate: raw.registryExpiryDate || raw.expiryDate,
        updatedDate: raw.updatedDate,
    };
}
function parseWhoisBr(raw) {
    return {
        domainName: raw.handle,
        registrar: "Registro BR",
        creationDate: raw.events[0].eventDate,
        lastChange: raw.events[1].eventDate,
        expiryDate: raw.events[2].eventDate,
    };
}
