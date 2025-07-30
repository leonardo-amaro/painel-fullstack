export default function formatarData(stringData: string) {
  const data = new Date(stringData);
  const dia = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
