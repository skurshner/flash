import React from "react";
import Breadcrumbs from "../Common/Breadcrumbs";

const CreateDeck = () => {
  return (
    <div className="container">
      <Breadcrumbs tier={2} currentPage={"Create Deck"} />
      <h1>Create Deck</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder={"Deck Name"}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            rows={4}
            className="form-control"
            id="description"
            placeholder={"Breif Description of the Deck"}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDeck;
