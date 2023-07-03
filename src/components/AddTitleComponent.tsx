import React from "react";

interface IAddTitleComponent {
  title: string;
  input: any;
}

const AddTitleComponent = ({ title, input }: IAddTitleComponent) => {
  return (
    <div className="flex items-center py-4 px-2 border border-solid border-b-gray-400">
      <div className="w-2/6 mr-2 font-bold">{title}</div>
      <input
        type="text"
        className="recipe-input"
        value={input.value}
        onChange={input.onChange}
      />
    </div>
  );
};

export default React.memo(AddTitleComponent);
