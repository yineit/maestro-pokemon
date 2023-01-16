import Button from "react-bootstrap/Button";
import Select from "react-select";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Pokemones() {
  const [listadoPokemones, setListadoPokemones] = useState();
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');
  const [selectedOptions, setSelectedOptions] = useState();
  const navigate = useNavigate();
  const url_api = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    getListadoPokemones();
  }, []);

  const getListadoPokemones = async () => {
    const resp = await fetch(url_api);
    const data = await resp.json();
    const listado_pokemones = data.results;
    const listado_pokemones_final = [];
    listado_pokemones.forEach((pokemon) => {

      let pokemon_object = {
        value: pokemon.name,
        label: pokemon.name

      };
      listado_pokemones_final.push(pokemon_object);
    });
    setListadoPokemones(listado_pokemones_final);

  };
  const handleSelect = (data) => {
    setSelectedOptions(data);
    setPokemonSeleccionado(data.value);

  };
  const verDetallePokemon = () => {
    navigate(`/pokemones/${pokemonSeleccionado}`);

  };


  return (

    <>
      <Container className="mt-4 mx-auto">
        <Row>
          <Col>

            <h4 className="text-warning">Encuentra tu Pokemon</h4>
            <div>
              <Select
                options={listadoPokemones}
                placeholder="Selecciona un Pokemon"
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti={false}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#ffbb00',
                    primary: '#3B4CCA',

                  },

                })}

                classNamePrefix="select"
              />
            </div>

            <Button className="btn btn-warning btn-lg mt-5" onClick={verDetallePokemon}>Ver Detalle</Button>




          </Col>
        </Row>
      </Container>

    </>

  )
}
