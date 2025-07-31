import { useState } from "react";
import Card from "../Card";
import styles from "./PaginaInicial.module.css";
import { dnsLookup } from "../../utils/dnsLookup";
import { whoisLookup } from "../../utils/whoisLookup";

const PaginaInicial = () => {
  const [dominio, setDominio] = useState('');
  const [dns, setDns] = useState<any>(null);
  const [whois, setWhois] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const aoClicar = async () => {
    if (!dominio.trim() || !dominio.includes(".")) return alert("Por favor, digite um domínio válido");

    setLoading(true);
    try {
      let dnsResultado = await dnsLookup(dominio.trim());
      let whoisResultado = await whoisLookup(dominio.trim());
      setDns(dnsResultado);
      setWhois(whoisResultado);
      console.log(dnsResultado);
      console.log(whoisResultado);
    } catch (err) {
      console.log("Erro na consulta. Verifique o domínio e tente novamente. Detalhes: ", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.principal}>
      <h2>Página inicial</h2>
      <h3>Boas-vindas ao seu Painel de Atendimento!</h3>
      <p>Insira um domínio no campo a seguir para verificar as informações sobre o mesmo.</p>
      <input
        type="text"
        value={dominio}
        onChange={(e) => setDominio(e.target.value)}
        disabled={loading}
      />
      <button
        onClick={aoClicar}
        disabled={loading}
      >
        {loading ? "Verificando..." : "Verificar"}
      </button>
      <Card tipo="dns" titulo="NsLookup" dados={dns} />
      <Card tipo="whois" titulo="Whois" dados={whois} />
    </section>
  );
}

export default PaginaInicial;
