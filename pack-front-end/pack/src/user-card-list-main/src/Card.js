import "./Card.css";

export default function Card({ handleDel, name, email, phone }) {
  return (
    <div className="container">
      <div className="card">
        <h4>{name}</h4>
        <p> {email}</p>
        <p> {phone} </p>
        <a href="#" onClick={handleDel}>
          {" "}
          X{" "}
        </a>
      </div>
    </div>
  );
}
