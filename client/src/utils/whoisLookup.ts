export function whoisLookup(dominio: string): Object {
  const dados = fetch(`https://ideal-bassoon-gwjx6jjr7wj2vvp7-3000.app.github.dev/whois/${dominio}`)
    .then((resposta) => resposta.json());
  return dados;
}
