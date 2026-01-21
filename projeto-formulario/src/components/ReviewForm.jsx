import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

function ReviewForm({ data, updateFieldHandler }) {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onchange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onchange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            checked={data.review === "satisfied"}
            onchange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            required
            checked={data.review === "very_satisfied"}
            onchange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sua experiência com o produto..."
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default ReviewForm;
