import React from "react";
import Input from "./atoms/input/Input";

interface IJoinInput {
  title: string;
  input: any;
  isPassword: boolean;
  onCheck?: () => void;
}

const JoinInput = ({ title, input, isPassword, onCheck }: IJoinInput) => {
  return (
    <div className="flex items-center py-4 px-2">
      <div className="w-1/5 mr-2 font-bold">{title}</div>
      <Input
        className="recipe-input"
        onChange={input.onChange}
        isPassword={isPassword}
      />
      {title === "아이디" && (
        <div
          className="ml-1 rounded bg-shadowBlue text-white text-xs p-1 cursor-pointer hover:bg-blue-400"
          onClick={onCheck}
        >
          중복체크
        </div>
      )}
    </div>
  );
};

export default React.memo(JoinInput);
