import React from "react";
import Button from "../Common/Button";

const DeckForm = ({
  name,
  description,
  handleNameChange,
  handleDescriptionChange,
  handleSubmit,
  handleCancel,
}) => {
  return (
    <form
      className="my-4 p-4 bg-slate-200 rounded-md shadow flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="font-semibold text-slate-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="mt-2 px-4 py-3 rounded-lg"
          id="name"
          autoComplete={"off"}
          placeholder={"Deck Name"}
          onChange={handleNameChange}
          value={name}
          required
        />
      </div>

      <div className="mt-4 flex flex-col">
        <label htmlFor="description" className="font-semibold text-slate-700">
          Description
        </label>
        <textarea
          rows={4}
          className="mt-2 px-4 py-3 rounded-lg"
          placeholder={"Brief Description of the Deck"}
          onChange={handleDescriptionChange}
          value={description}
          required
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 md:w-5/12 md:self-end">
        <Button
          variant={"outline"}
          text={"Cancel"}
          clickHandler={handleCancel}
        />
        <Button variant={"secondary"} type={"submit"} text={"Submit"} />
      </div>
    </form>
  );
};

export default DeckForm;
