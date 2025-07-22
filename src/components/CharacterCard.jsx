import { useContext, useEffect, useState } from "react";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FavoritesProvider } from "../context/FavoritesContext";

const CharacterCard = ({ item }) => {
  const { verificarFavoritos, favoritos, } =
    useContext(FavoritesProvider);
  let Nombres = favoritos.map((item) => item.name);

  useEffect(() => {
    if (Nombres.includes(item.name)) {
      setShow(true);
    }
  }, [Nombres, item.name]);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const verificar = (item) => {
    setShow(!show);
  
    verificarFavoritos(item);
  };
  return (
    <>
      <Card
        key={item.id}
        className="border border-secondary bg-dark text-light"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <ListGroup
            variant="flush"
            className="border border-secondary text-white"
          >
            <ListGroup.Item className="bg-dark text-white border-secondary">
              {item.gender}
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-secondary">
              {item.species}
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-secondary">
              {item.status}
            </ListGroup.Item>
          </ListGroup>
          <Button
            variant="outline-light mt-3"
            onClick={() => navigate(`/character/${item.id}`)}
          >
            Ver Detalles
          </Button>
          <Button
            className="float-end mt-3 rounded rounded-circle   d-flex justify-content-center align-items-center"
            onClick={() => verificar(item)}
            variant="danger"
          >
            {show ? (
              <i className="bi bi-suit-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CharacterCard;
