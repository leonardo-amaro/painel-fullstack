export function dnsLookup(dominio: string): Object {
  const dados = fetch(`https://nslookup-api-production.up.railway.app/nslookup/${dominio}`)
    .then((resposta) => resposta.json());
  return dados;
}
