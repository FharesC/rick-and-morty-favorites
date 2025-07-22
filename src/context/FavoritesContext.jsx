import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FavoritesProvider = createContext();

const FavoritesContext = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtrar, setFiltrar] = useState([]);
  const [totalPersonajes, setTotalPersonajes] = useState([]);

  //Verifica los personajes favoritos del usuario
  const verificarFavoritos = (personaje) => {
    setFavoritos((prev) => [...prev, personaje]);
    let nombreNuevo = personaje.name;
    let Nombres = favoritos.map((item) => item.name);

    if (Nombres.includes(nombreNuevo)) {
      setFavoritos(favoritos.filter((item) => item.name != nombreNuevo));
    }
  };

  //Obtiene los Personajes del API rick and Morty
  const obtenerPersonaje = async () => {
    try {
      let response = await axios.get(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      setPersonajes(response.data.results);
      setFiltrar(response.data.results);
      setTotalPersonajes(response.data.results);
      console.log(response.data.results);
      setLoading(false);
    } catch {
      console.error(
        "No pudimos obtener la información del usuario, por favor intente nuevamente"
      );
    }
  };
  //UseEffect que sirve para mandar a llamar al API de los personajes
  useEffect(() => {
    obtenerPersonaje();
  }, []);

  return (
    <FavoritesProvider.Provider
      value={{
        favoritos,
        setFavoritos,
        personajes,
        loading,
        verificarFavoritos,
        setPersonajes,
        filtrar,
        totalPersonajes,
      }}
    >
      {children}
    </FavoritesProvider.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };
