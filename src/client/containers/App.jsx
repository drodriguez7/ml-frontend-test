import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Searchbox from '../components/Searchbox';
import useQuery from '../hooks/useQuery';
import '../assets/styles/containers/App.scss';

const App = (props) => {
  const { route } = props;
  const [searchValue, setSearchValue] = useState();
  const location = useLocation();
  const history = useHistory();
  const query = useQuery();

  const querySearch = query.get('search');

  const handleSearch = () => {
    if (querySearch === searchValue) {
      // re-renders the page if search value is the same as the query param
      history.go();
      return;
    }
    history.push(`/items?search=${searchValue}`);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setSearchValue('');
    }

  }, [location]);

  return (
    <>
      <Searchbox
        onSubmit={handleSearch}
        onChange={setSearchValue}
        value={searchValue}
      />
      <main>
        {renderRoutes(route.routes)}
      </main>
    </>
  );
};

export default App;
