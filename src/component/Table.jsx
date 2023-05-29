import { useContext, useState } from 'react';
import AppContext from '../context/appContext';
import Form from './Form';

function Table() {
  // const [planets, setPlanets] = useState([]);
  const { planets, setPlanets, backupPlanets } = useContext(AppContext);
  const [pesquisa, setPesquisa] = useState();
  const handleChange = ({ target }) => {
    setPesquisa(target.value);
    console.log(target.value);
    // console.log(pesquisa);
    const filterPlanets = backupPlanets
      .filter((planet) => planet.name.includes(target.value));
    setPlanets(filterPlanets);
    console.log(filterPlanets);
  };
  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        value={ pesquisa }
        data-testid="name-filter"
      />
      <Form />
      <table>
        <tr>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>name</th>
          <th>orbital period</th>
          <th>population</th>
          <th>rotation period</th>
          <th>surface water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
            <td>{planet.gravity}</td>
            <td>{planet.name}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Table;
