import "./styles.css";
import { useEffect, useState } from "react";
import Card from "./Card.js";

export default function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newMail, setNewMail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDel = (user) => {
    setUsers(users.filter((adam) => adam.id !== user.id));
  };

  let newUser = {};
  newUser.name = newName;
  newUser.email = newMail;
  newUser.phone = newPhone;
  newUser.id = Math.random() * 10000;

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <input
        placeholder="Entre com o nome"
        onChange={(e) => setNewName(e.target.value)}
      />{" "}
      <input
        placeholder="Entre com o papel"
        onChange={(e) => setNewMail(e.target.value)}
      />{" "}
      <input
        placeholder="Entre com Status"
        onChange={(e) => setNewPhone(e.target.value)}
      />{" "}
      <br></br>
      <a
        href="#"
        className="myButton"
        onClick={() => setUsers([...users, newUser])}
      >
        Add New User!
      </a>
      <br></br>
      <br></br>
      <input
        className="css-input"
        placeholder="Procure o usuario:"
        onChange={searchHandler}
      />
      {search === ""
        ? users.map((user) => (
            <Card
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              handleDel={() => handleDel(user)}
            />
          ))
        : users
            .filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => (
              <Card
                key={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                handleDel={() => handleDel(user)}
              />
            ))}
    </div>
  );
}
