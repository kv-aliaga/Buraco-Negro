import React from "react";
import Header from "../components/Header/Header";
import "./Home.css";

const MainView: React.FC = () => {
  return (
    <>
      <Header links={[{ url: "/simulation", displayName: "Simulação" }]} />
      <main id="home-container">
        <h2>O que são?</h2>
        <section>
          <p>
            São objetos astronômicos que apresentam densidade infinita e um
            campo gravitacional muito intenso, fazendo com que ele atraia todo
            elemento que cruza o seu horizonte de eventos, conhecido como “ponto
            de não retorno” de onde nem mesmo a própria luz pode escapar.
          </p>
          <p>
            Uma vez que qualquer objeto ultrapasse seu horizonte de eventos é
            impossível voltar. Isso ocorre porque a velocidade necessária para
            que qualquer objeto volte do “ponto de não retorno” é maior que a
            velocidade da luz, daí vem o apelido “ponto de não retorno”. Por não
            emitirem luz própria, buracos negros não podem ser vistos a olho nu
            mas podem ser detectados por meio de instrumentos astronômicos
            ópticos através de seus discos de acreção e lentes gravitacionais,
            ou radiotelescópios e detectores de ondas gravitacionais.
          </p>
          <p>
            Um buraco negro se origina por meio de um colapso gravitacional de
            outros corpos celestes, como estrelas supermassivas (que possuem no
            mínimo 3 vezes a massa do Sol). Estrelas são grandes bolas de gás
            hidrogênio e hélio, que devido a altíssimas pressões e temperaturas
            entram em processo de fusão nuclear, o que libera imensas quantidade
            de energia e forma elementos mais pesados, como o oxigênio e o
            ferro. Dessa forma, estrelas podem ser representadas por uma eterna
            batalha entre a força gravitacional tentando colapsar a bola de gás
            e a pressão gerada na fusão nuclear tentando aumentar o raio da
            estrela. A formação do buraco negro acontece, então, quando o
            combustível da fusão nuclear acaba, o que elimina a única força
            lutando contra a gravidade e colapsa o corpo celeste em uma
            singularidade de desidade infinita, um buraco negro.
          </p>
        </section>

        <section>
          <p>Os buracos negros são divididos em três elementos principais:</p>
          <ul>
            <li>
              <strong>Singularidade:</strong>a principal parte, localiza no
              centro do astro, um único ponto que abriga toda a massa derivada
              do colapso gravitacional. A singularidade apresenta uma densidade
              extremamente alta, ou, descrita como infinita.
            </li>
            <li>
              <strong>Horizonte de Eventos:</strong>
              conhecido como “ponto de não retorno” no buraco negro, região em
              volta do núcleo. O limite até onde um elemento consegue escapar do
              buraco negro.
            </li>
            <li>
              <strong>Discos de acreção:</strong>
              discos de poeira e gases quentes que emitem radiação
              eletromagnética e se movem rapidamente entorno dos buracos negros.
              Torna possível a identificação de um buraco negro.
            </li>
          </ul>
        </section>

        <section>
          <p>Os buracos negros são classificados de a cordo com a massa:</p>
          <ul>
            <li>
              <strong>Buraco negro estelar:</strong>
              derivados do colapso gravitacional, pelo menos o triplo da massa
              do sol. Mais comuns no universo.
            </li>
            <li>
              <strong>Buraco negro supermassivo:</strong>
              são milhares ou bilhões de vezes mais densos que o sol.
              Localizados nos centros de galáxias. Temos como exemplo a
              Sagitário A (Sgr A)** que fica no centro da Via Láctea, e deu
              origem a primeira e famosa foto de um buraco negro que conhecemos.
            </li>
            <li>
              <strong>Buraco negro intermediário:</strong>
              massa intermediária entre os comuns e os supermassivos. Os
              cientistas estimam a existência de 40 quintilhões (40 seguido por
              18 zeros) de buracos negros espalhados no universo observável.
              Isso é aproximadamente 6 vezes mais grãos de areias que existem no
              mundo.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default MainView;
