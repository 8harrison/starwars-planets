import { useState, useEffect } from 'react';

function Table() {
  const [planets, setPlanets] = useState([]);
  const [pesquisa, setPesquisa] = useState();
  const [backupPlanets, setBackupPlanets] = useState([]);
  const [columFilter, setColumFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const handleColumFilter = ({ target }) => {
    setColumFilter(target.value);
  };
  const handleComparisonFilter = ({ target }) => {
    setComparisonFilter(target.value);
  };
  const handleValueFilter = ({ target }) => {
    setValueFilter(target.value);
  };

  const maiorOuMenorOuIgual = (parametro) => {
    if (comparisonFilter === 'maior que') {
      const filterPlanets = backupPlanets
        .filter((planet) => Number(planet[parametro]) > Number(valueFilter));
      setPlanets(filterPlanets);
      console.log(parametro);
    } else if (comparisonFilter === 'menor que') {
      const filterPlanets = backupPlanets
        .filter((planet) => Number(planet[parametro]) < Number(valueFilter));
      setPlanets(filterPlanets);
    } else {
      const filterPlanets = backupPlanets
        .filter((planet) => Number(planet[parametro]) === Number(valueFilter));
      setPlanets(filterPlanets);
    }
  };
  const onClick = () => {
    if (columFilter === 'population') {
      maiorOuMenorOuIgual('population');
    } else if (columFilter === 'orbital_period') {
      maiorOuMenorOuIgual('orbital_period');
    } else if (columFilter === 'diameter') {
      maiorOuMenorOuIgual('diameter');
    } else if (columFilter === 'rotation_period') {
      maiorOuMenorOuIgual('rotation_period');
    } else if (columFilter === 'surface_water') {
      maiorOuMenorOuIgual('surface_water');
    }
  };

  const handleChange = ({ target }) => {
    setPesquisa(target.value);
    console.log(target.value);
    // console.log(pesquisa);
    const filterPlanets = backupPlanets
      .filter((planet) => planet.name.includes(target.value));
    setPlanets(filterPlanets);
    console.log(filterPlanets);
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setBackupPlanets(data.results);
    };
    fetchPlanets();
  }, [setPesquisa]);
  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        value={ pesquisa }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        onChange={ handleColumFilter }
        value={ columFilter }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleComparisonFilter }
        value={ comparisonFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ handleValueFilter }
      />
      <button data-testid="button-filter" type="button" onClick={ onClick }>
        adicionar filtro
      </button>
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
