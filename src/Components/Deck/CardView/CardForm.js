import React from "react";
import Button from "../../Common/Button";

const CardForm = ({
  card,
  primaryButtonText,
  secondaryButtonText,
  handleFrontChange,
  handleBackChange,
  handleSubmit,
  handleSecondaryButton,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="front" className="form-label">
          Front
        </label>
        <textarea
          rows={2}
          className="form-control"
          placeholder={"Front side of card"}
          onChange={handleFrontChange}
          value={card.front}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="back" className="form-label">
          Back
        </label>
        <textarea
          rows={2}
          className="form-control"
          placeholder={"Back side of card"}
          onChange={handleBackChange}
          value={card.back}
        />
      </div>
      <div className="row">
        <div className="col-auto pr-0 mr-2">
          <Button
            variant={"secondary"}
            type={"button"}
            text={secondaryButtonText}
            clickHandler={handleSecondaryButton}
          />
        </div>
        <div className="col-auto px-0">
          <Button
            variant={"primary"}
            type={"submit"}
            text={primaryButtonText}
          />
        </div>
      </div>
    </form>
  );
};

export default CardForm;
