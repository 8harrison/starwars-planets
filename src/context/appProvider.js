import React, { useMemo, useState, useEffect } from 'react';
import AppContext from './appContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [backupPlanets, setBackupPlanets] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setBackupPlanets(data.results);
    };
    fetchPlanets();
  }, []);

  const planetas = useMemo(() => ({
    planets, setPlanets, backupPlanets, setBackupPlanets,
  }));
  return (
    <main>
      <AppContext.Provider value={ planetas }>
        {children}
      </AppContext.Provider>
    </main>
  );
}

export default AppProvider;
