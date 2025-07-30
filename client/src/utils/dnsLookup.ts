export function dnsLookup(dominio: string): Object {
  const dados = fetch(`https://curly-space-computing-machine-7467w665wp52wrxp-3000.app.github.dev/nslookup/${dominio}`)
    .then((resposta) => resposta.json());
  return dados;
}
