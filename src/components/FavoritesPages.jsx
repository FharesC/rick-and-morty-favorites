import { useContext } from "react";
import { FavoritesProvider } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, ListGroup, Row } from "react-bootstrap";

const FavoritesPages = () => {
  const { favoritos } = useContext(FavoritesProvider);
  console.log(favoritos);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-light text-center">Tus personajes Favoritos</h1>
      <Row>
        <Button
          variant="outline-info"
          className="col-4 m-auto my-4"
          onClick={() => navigate("/")}
        >
          Regresar
        </Button>
      </Row>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {favoritos.length == 0 && <h1 className="text-light mt-5"><i className="bi bi-exclamation-octagon-fill text-danger"></i> No hay personajes favoritos</h1>}
        {favoritos.map((item) => {
          return (
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
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default FavoritesPages;
