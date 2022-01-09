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
    <form
      className="my-4 p-4 bg-slate-200 rounded-md shadow flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="front" className="font-semibold text-slate-700">
          Front
        </label>
        <textarea
          rows={2}
          className="mt-2 px-4 py-3 rounded-lg"
          placeholder={"Front side of card"}
          onChange={handleFrontChange}
          value={card.front}
          required
        />
      </div>

      <div className="mt-4 flex flex-col">
        <label htmlFor="back" className="font-semibold text-slate-700">
          Back
        </label>
        <textarea
          rows={2}
          className="mt-2 px-4 py-3 rounded-lg"
          placeholder={"Back side of card"}
          onChange={handleBackChange}
          value={card.back}
          required
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 md:w-5/12 md:self-end">
        <Button
          variant={"outline"}
          text={secondaryButtonText}
          clickHandler={handleSecondaryButton}
        />
        <Button
          variant={"secondary"}
          type={"submit"}
          text={primaryButtonText}
        />
      </div>
    </form>
  );
};

export default CardForm;
