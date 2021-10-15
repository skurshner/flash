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
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          autoComplete={"off"}
          placeholder={"Deck Name"}
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          rows={4}
          className="form-control"
          placeholder={"Brief Description of the Deck"}
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>
      <div className="row">
        <div className="col-auto pr-0 mr-2">
          <Button
            variant={"secondary"}
            type={"button"}
            text={"Cancel"}
            clickHandler={handleCancel}
          />
        </div>
        <div className="col-auto px-0">
          <Button variant={"primary"} type={"submit"} text={"Submit"} />
        </div>
      </div>
    </form>
  );
};

export default DeckForm;
