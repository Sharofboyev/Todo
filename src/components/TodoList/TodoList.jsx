import tempData from "../../utils/temp.json";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  return (
    <ul>
      {tempData.map((todoItem, index) => {
        return (
          <TodoItem
            data={todoItem}
            key={index}
          ></TodoItem>
        );
      })}
    </ul>
  );
}

export default TodoList;
