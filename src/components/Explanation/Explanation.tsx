import React from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";

const Explanation: React.FC = () => {
  return (
    <MathJaxContext>
      <p>
        Este simulador foi feito usando o cálculo desenvolvido pelo astrônomo e
        físico alemão Karl Schwarzschild para calcular o raio necessário para um
        corpo celeste virar um buraco negro com base em sua massa. O simulador
        considera que a estrela virou um buraco negro quando seu raio se torna
        menor que o raio de Schwarzschild calculado a partir da massa usando a
        fórmula abaixo:
        <MathJax>{`\\[ r_s = \\frac{2GM}{c^2} \\]`}</MathJax>
      </p>
    </MathJaxContext>
  );
};

export default Explanation;
