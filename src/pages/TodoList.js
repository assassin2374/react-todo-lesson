import './TodoList.css';
import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useState(
    [
      {
        title:"牛乳を買うw",
        description:"ハローズで買ってくる、ついでに冷蔵庫の牛乳腐ってるので捨てる。",
      },
      {
        title:"米を炊く",
        description:"18:30 くらいに炊きあがるように設定しておく。",
      },
      {
        title:"ゴミを捨てる",
        description:"明日の８時までに燃えるゴミを出しておく。",
      },
    ]);
  const addTodoList = () => {
    console.log(inputValue)
    // const newTodoList = [];
    // for (const todo of todoList) {
    //   newTodoList.push(todo);
    // }
    const newTodoList = [...todoList];
    newTodoList.push(inputValue);
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>TODO App</h1>
      <div className="input_area">
        <Input value={inputValue} onChange={(e) => {setInputValue(e.target.value);}}/>
        <Button onClick = {addTodoList}/>
      </div>

      <div className="todo_area">
        <h2 className="todo_area_title">TODO List</h2>
        <div className="todo_list">
          {todoList.map(( todo ) => {
            return (
              <div key={todo.title} className="todo_card">
                <h2 className="todo_title">{todo.title}<img src="img/dust_box.png" alt="削除ボタン" className="delete_button" /></h2>
                <p className="todo_content">{todo.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

