import { useContext, useState } from 'react';
import AppContext from '../context/appContext';

function Form() {
  const { planets, setPlanets, backupPlanets } = useContext(AppContext);
  const initial = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [columFilter, setColumFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [usedFilter, setUsedFilter] = useState([]);
  const [filters] = useState(initial);
  const [populationChecked, setPopulationChecked] = useState(true);
  const [orbitalChecked, setOrbitalChecked] = useState(true);
  const [diameterChecked, setDiameterChecked] = useState(true);
  const [rotationChecked, setRotationChecked] = useState(true);
  const [surfaceChecked, setSurfaceChecked] = useState(true);

  const maiorOuMenorOuIgual = (nomeDaColuna, planetas) => {
    if (comparisonFilter === 'maior que') {
      const filterPlanets = planetas.filter(
        (planet) => Number(planet[nomeDaColuna]) > Number(valueFilter),
      );
      setPlanets(filterPlanets);
      console.log(nomeDaColuna);
    } else if (comparisonFilter === 'menor que') {
      const filterPlanets = planetas.filter(
        (planet) => planet[nomeDaColuna] !== 'unknow'
          && Number(planet[nomeDaColuna]) < Number(valueFilter),
      );
      setPlanets(filterPlanets);
    } else {
      const filterPlanets = planetas.filter(
        (planet) => Number(planet[nomeDaColuna]) === Number(valueFilter),
      );
      setPlanets(filterPlanets);
    }
  };
  const maiorOuMenorOuIgualAux = (
    nomeDaColuna,
    comparison,
    value,
    planetas,
  ) => {
    if (comparison === 'maior que') {
      const filterPlanets = planetas.filter(
        (planet) => Number(planet[nomeDaColuna]) > Number(value),
      );
      console.log(filterPlanets);
      setPlanets(filterPlanets);
    } else if (comparison === 'menor que') {
      const filterPlanets = planetas.filter(
        (planet) => planet[nomeDaColuna] !== 'unknow'
          && Number(planet[nomeDaColuna]) < Number(value),
      );
      setPlanets(filterPlanets);
    } else {
      const filterPlanets = planetas.filter(
        (planet) => Number(planet[nomeDaColuna]) === Number(value),
      );
      setPlanets(filterPlanets);
    }
  };
  // const filterPopulation = () =>{
  // }
  const onClick2 = (colum, comparison, value, planetas) => {
    if (colum === 'population') {
      maiorOuMenorOuIgualAux('population', comparison, value, planetas);
    } else if (colum === 'orbital_period') {
      maiorOuMenorOuIgualAux('orbital_period', comparison, value, planetas);
    } else if (colum === 'diameter') {
      maiorOuMenorOuIgualAux('diameter', comparison, value, planetas);
    } else if (colum === 'rotation_period') {
      maiorOuMenorOuIgualAux('rotation_period', comparison, value, planetas);
    } else if (colum === 'surface_water') {
      maiorOuMenorOuIgualAux('surface_water', comparison, value, planetas);
    }
  };
  const onClick = () => {
    if (columFilter === 'population') {
      maiorOuMenorOuIgual('population', planets);
      setUsedFilter([
        ...usedFilter,
        { columFilter, comparisonFilter, valueFilter },
      ]);
      setPopulationChecked(false);
      const filtrado = filters.filter((filtro) => columFilter !== filtro);
      setColumFilter(filtrado[0]);
    } else if (columFilter === 'orbital_period') {
      maiorOuMenorOuIgual('orbital_period', planets);
      setUsedFilter([
        ...usedFilter,
        { columFilter, comparisonFilter, valueFilter },
      ]);
      setOrbitalChecked(false);
      const filtrado = filters.filter((filtro) => columFilter !== filtro);
      setColumFilter(filtrado[0]);
    } else if (columFilter === 'diameter') {
      maiorOuMenorOuIgual('diameter', planets);
      setUsedFilter([
        ...usedFilter,
        { columFilter, comparisonFilter, valueFilter },
      ]);
      setDiameterChecked(false);
      const filtrado = filters.filter((filtro) => columFilter !== filtro);
      setColumFilter(filtrado[0]);
    } else if (columFilter === 'rotation_period') {
      maiorOuMenorOuIgual('rotation_period', planets);
      setUsedFilter([
        ...usedFilter,
        { columFilter, comparisonFilter, valueFilter },
      ]);
      setRotationChecked(false);
      const filtrado = filters.filter((filtro) => columFilter !== filtro);
      setColumFilter(filtrado[0]);
    } else if (columFilter === 'surface_water') {
      maiorOuMenorOuIgual('surface_water', planets);
      setUsedFilter([
        ...usedFilter,
        { columFilter, comparisonFilter, valueFilter },
      ]);
      setSurfaceChecked(false);
      const filtrado = filters.filter((filtro) => columFilter !== filtro);
      setColumFilter(filtrado[0]);
    }
  };
  const handleColumFilter = ({ target }) => {
    setColumFilter(target.value);
  };
  const handleComparisonFilter = ({ target }) => {
    setComparisonFilter(target.value);
  };
  const handleValueFilter = ({ target }) => {
    setValueFilter(target.value);
  };
  const btnExcluir = (nome) => {
    const xablau = usedFilter.filter(
      (elemento) => elemento.columFilter !== nome.columFilter,
    );
    setUsedFilter(xablau);
    setPlanets(backupPlanets);

    usedFilter.forEach((filtro) => {
      onClick2(
        filtro.columFilter,
        filtro.comparisonFilter,
        filtro.valueFilter,
      );
    });

    // if (nome.columFilter === 'population') {
    //   setPopulationChecked(true);
    // } else if (nome.columFilter === 'orbital_period') {
    //   setOrbitalChecked(true);
    // } else if (nome.columFilter === 'diameter') {
    //   setDiameterChecked(true);
    // } else if (nome.columFilter === 'rotation_period') {
    //   setRotationChecked(true);
    // } else if (nome.columFilter === 'surface_water') {
    //   setSurfaceChecked(true);
    // }
    // usedFilter.forEach((el) => {
    //   setColumFilter(el.columFilter);
    //   setComparisonFilter(el.comparisonFilter);
    //   setValueFilter(el.valueFilter);
    //   onClick();
    //   console.log(el);
    // });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        id="colum-filter"
        onChange={ handleColumFilter }
        value={ columFilter }
      >
        {populationChecked && (
          <option value="population" id="population">
            population
          </option>
        )}
        {orbitalChecked && (
          <option value="orbital_period" id="orbital_period">
            orbital_period
          </option>
        )}
        {diameterChecked && (
          <option value="diameter" id="diameter">
            diameter
          </option>
        )}
        {rotationChecked && (
          <option value="rotation_period" id="rotation_period">
            rotation_period
          </option>
        )}
        {surfaceChecked && (
          <option value="surface_water" id="surface_water">
            surface_water
          </option>
        )}
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
      {usedFilter.map((filter) => (
        <p key={ filter } data-testid="filter" id={ filter }>
          {filter.columFilter}
          <button
            type="button"
            data-testid="button-remove-filters"
            name={ filter }
            onClick={ () => btnExcluir(filter) }
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}

export default Form;
