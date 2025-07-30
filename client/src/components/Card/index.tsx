import styles from "./Card.module.css";
import formatarData from "../../utils/formatarData";

type CardProps = {
  tipo: 'dns' | 'whois';
  titulo: string;
  dados: any;
}

const Card = ({ tipo, titulo, dados }: CardProps) => {
  switch (tipo) {
    case 'dns':
      return (
        <div className={styles.card}>
          <h3>{titulo}</h3>
          {dados && (
            <>
              <ul>A: {dados.a ? dados.a.map((i: any, k: any) => <li key={k}>{i}</li>) : "Não encontrado."}</ul>
              <ul>MX: {dados.mx ? dados.mx.map((i: any, k: any) => <li key={k}>{i.exchange}</li>) : "Não encontrado."}</ul>
              <ul>NS: {dados.ns ? dados.ns.map((i: any, k: any) => <li key={k}>{i}</li>) : "Não encontrado."}</ul>
              <ul>PTR: {dados.ptr.length ? dados.ptr.map((i: any, k: any) => <li key={k}>{i}</li>) : "Não encontrado."}</ul>
            </>
          )}
        </div>
      );
      break;
    
    case 'whois':
      return (
        <div className={styles.card}>
          <h3>{titulo}</h3>
          {dados && (
            <>
              <p>Registradora: {dados.whois.registrar}</p>
              <p>Data de expiração: {formatarData(dados.whois.expiryDate)}</p>
            </>
          )}
        </div>
      );
      break;
  
    default:
      break;
  }
}

export default Card;
