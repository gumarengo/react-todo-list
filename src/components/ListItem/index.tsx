import { useState } from "react";
import { Item } from "../../types/item";
import * as styled from "./styles";

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <>
      <styled.Container done={isChecked}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>{item.name}</label>
      </styled.Container>
    </>
  );
};

export default ListItem;
