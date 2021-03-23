import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Searchbox from '../components/Searchbox';
import ResultList from './ResultList';
import useQuery from '../hooks/useQuery';
import '../assets/styles/containers/App.scss';

const App = () => {
  const history = useHistory();
  const query = useQuery();

  const handleSearch = (searchValue) => {
    history.push(`/items?search=${searchValue}`);
  };

  return (
    <>
      <Searchbox
        onSubmit={handleSearch}
        value={query.get('search')}
      />
      <main>
        <Switch>
          <Route exact path='/items'>
            <ResultList />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
