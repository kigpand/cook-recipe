import React from "react";

interface IAddTitleComponent {
  title: string;
  input: any;
}

const AddTitleComponent = ({ title, input }: IAddTitleComponent) => {
  return (
    <div className="flex flex-col py-4 px-2">
      <div className="w-2/6 mr-2 mb-2 font-bold text-sm">{title}</div>
      <input
        type="text"
        className="recipe-input rounded placeholder:text-sm pl-2"
        value={input.value}
        placeholder="제목"
        onChange={input.onChange}
      />
    </div>
  );
};

export default React.memo(AddTitleComponent);
