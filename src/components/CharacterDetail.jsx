import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FavoritesProvider } from "../context/FavoritesContext";
import { Button, CardImg, Table } from "react-bootstrap";

const CharacterDetail = () => {
  const { personajes, setPersonajes,totalPersonajes } = useContext(FavoritesProvider);
  const navigate = useNavigate();
  const { id } = useParams();
  let personaje = personajes.find((item) => item.id == id);

  const a = () => {
    navigate("/");
  setPersonajes(totalPersonajes);    
  };
  return (
    <>
      <h1 className="text-light text-center">{personaje?.name}</h1>
      <CardImg
        className="w-25 d-flex justify-content-center m-auto "
        src={personaje?.image}
      ></CardImg>
      <Table className="mt-5"  border hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Datos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>{personaje?.name}</td>
          </tr>
          <tr>
            <td>Creado</td>
            <td>{personaje?.created}</td>
          </tr>
          <tr>
            <td>Género</td>
            <td>{personaje?.gender}</td>
          </tr>
          <tr>
            <td>Especie</td>
            <td>{personaje?.species}</td>
          </tr>
          <tr>
            <td>Estado</td>
            <td>{personaje?.status}</td>
          </tr>
          <tr>
            <td>Origen</td>
            <td>{personaje?.origin.name}</td>
          </tr>
          <tr>
            <td>Localización</td>
            <td>{personaje?.location.name}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={a} variant="outline-light">
        Regresar
      </Button>
    </>
  );
};

export default CharacterDetail;
