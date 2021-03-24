import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Searchbox from '../components/Searchbox';
import ResultList from './ResultList';
import ProductDetail from './ProductDetail';
import useQuery from '../hooks/useQuery';
import '../assets/styles/containers/App.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState();
  const location = useLocation();
  const history = useHistory();
  const query = useQuery();

  const querySearch = query.get('search') || '';

  const handleSearch = () => {
    if (querySearch === searchValue) {
      // re-renders the page if search value is the same as the query param
      history.go();
      return;
    }
    history.push(`/items?search=${searchValue}`);
  };

  useEffect(() => {
    setSearchValue(querySearch);
  }, [location]);

  return (
    <>
      <Searchbox
        onSubmit={handleSearch}
        onChange={setSearchValue}
        value={searchValue}
      />
      <main>
        <Switch>
          <Route exact path='/items'>
            <ResultList />
          </Route>
          <Route exact path='/items/:id'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
