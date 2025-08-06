export function whoisLookup(dominio: string): Object {
  const dados = fetch(`https://nslookup-api-production.up.railway.app/whois/${dominio}`)
    .then((resposta) => resposta.json());
  return dados;
}
