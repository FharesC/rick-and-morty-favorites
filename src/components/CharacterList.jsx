import { useContext } from "react";
import { Button, Card, Form, FormLabel, ListGroup, Row } from "react-bootstrap";
import "../style.css";
import { FavoritesProvider } from "../context/FavoritesContext";
import CharacterCard from "./CharacterCard";
import { useNavigate } from "react-router-dom";
const CharacterList = () => {
  const navigate = useNavigate();
  const { personajes, loading, filtrar, setPersonajes } =
    useContext(FavoritesProvider);

  const filtrarPersonaje = (e) => {
    let palabra = e.target.value;
    setPersonajes(filtrar.filter((item) => item.name.toLowerCase().includes(palabra.toLowerCase())));
  };

  return (
    <>
      {loading && (
        <div className="sk-chase m-auto">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      )}
      <h1 className="m-auto text-center text-white my-4 border border-light w-50 rounded rounded-5 py-2 bg-secondary opacity-50">
        Personajes Rick and Morty
      </h1>
      <Row className="d-flex justify-content-end ">
        <Form.Control
          onChange={filtrarPersonaje}
          type="text"
          className="w-25 col-4 me-5  border-1"
          placeholder="Find character"
        />
      </Row>
      <Row className="d-flex justify-content-end ">
        <Button
          variant="outline-danger"
          className=" w-25 me-5  my-3"
          onClick={() => navigate("/favorites")}
        >
          {" "}
          Ir a Favoritos
        </Button>
      </Row>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {personajes.map((item) => {
          return <CharacterCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default CharacterList;
