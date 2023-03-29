import { useState } from "react";
import * as styled from "./App.styles";
import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";
import { Item } from "./types/item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão", done: false },
    { id: 2, name: "Comprar mochila", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({ id: list.length + 1, name: taskName, done: false });
    setList(newList);
  };

  return (
    <>
      <styled.Container>
        <styled.Area>
          <styled.Header>Lista de Tarefas</styled.Header>

          {/* Area para novas tarefas */}
          <AddArea onSubmit={handleAddTask} />
          {list.map((item, index) => (
            <ListItem item={item} key={index} />
          ))}
        </styled.Area>
      </styled.Container>
    </>
  );
};

export default App;
