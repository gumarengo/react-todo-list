import { KeyboardEvent, useState } from "react";
import * as style from "./styles";

type Props = {
  onSubmit: (taskName: string) => void;
};

const AddArea = ({ onSubmit }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter" && inputText !== "") {
      onSubmit(inputText);
    }
  };

  return (
    <style.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </style.Container>
  );
};

export default AddArea;
