import React from "react";
import Button from "../Common/Button";

const CardListItem = ({
  id,
  front,
  back,
  deleteButtonClickHandler,
  editButtonClickHandler,
}) => {
  return (
    <div className="p-4 h-full bg-indigo-100 flex flex-col justify-between rounded-md shadow-sm">
      <div>
        <div className="mb-4 flex flex-col gap-1">
          <p className="text-sm font-bold uppercase text-indigo-500">
            Front Side
          </p>
          <p>{front}</p>
        </div>

        <div className="mb-6 flex flex-col gap-.0.5">
          <p className="text-sm font-bold uppercase text-indigo-500">
            Back Side
          </p>
          <p>{back}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          variant={"outline"}
          text={"Edit"}
          icon={"edit"}
          clickHandler={() => editButtonClickHandler(id)}
        />

        <Button
          variant={"utility"}
          icon={"trash"}
          clickHandler={() => deleteButtonClickHandler(id)}
        />
      </div>
    </div>
  );
};

export default CardListItem;
