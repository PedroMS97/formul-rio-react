import React from "react";
import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfield: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisFied: <BsFillEmojiSmileFill />,
  very_satisFied: <BsFillEmojiHeartEyesFill />,
};

function Thanks({ data }) {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para sua próxima compra
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:{data.comment}</span>
      </p>
    </div>
  );
}

export default Thanks;
