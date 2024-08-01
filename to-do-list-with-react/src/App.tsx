import { useState } from "react";
import Input from "./component/input";
import styles from './component/styles.module.css';
import "./App.css"

type Item = {
  id: number;
  desx: string;
};

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [idx, setidx] = useState(-1);
  const [counter, setCounter] = useState(1);
  const [task, setTask] = useState<string>("");

  const getData = (data: string) => {
    setTask(data);
    console.log(data);
    if (data.trim() !== '') {
      const newTask: Item = {
        id: counter,
        desx: data
      };
      setItems([...items, newTask]);
      setCounter(counter + 1);
    }
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };
  const editItem = (item: Item) => {
    const newval = prompt("Enter a new task");
    if (newval !== null) {
      const updatedItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, desx: newval };
        }
        return i;
      });
      setItems(updatedItems);
      setTask('');
    }
  };
  return (
    <div className={styles.container }>
      <h2>Simple To do List</h2>
      <Input getData={getData} />
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={idx === index ? "list-group-item active" : "list-group-item"}
          >
            {item.desx}
            <button  className={`btn btn-primary ${styles.addbtm}`} onClick={() => editItem(item)}>Edit</button>
            <button className={`btn btn-danger ${styles.addbtm}`}  onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;