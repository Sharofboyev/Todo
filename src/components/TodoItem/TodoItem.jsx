import "./TodoItem.css";

function TodoItem(props) {
  const { header, time, files, content } = props.data;
  return (
    <li>
      <div className="TodoItem">
        <input type={"checkbox"}></input>
        <div className="headerAndContent">
          <h2>{header}</h2>
          <p>{content}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="edit">
          <img
            src={require("./pencil.png")}
            width="20px"
            height="20px"
          ></img>
        </button>
        <button className="delete">
          <img
            src={require("./bin.png")}
            width="20px"
            height="20px"
          ></img>
        </button>
        <p>{time}</p>
      </div>
    </li>
  );
}

export default TodoItem;
