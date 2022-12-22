
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { fetchingAllItem } from './store/items-redux/item-actions';


function App() {
  const dispatch = useDispatch()
  
 useEffect(() => {
  dispatch(fetchingAllItem())
 }, [dispatch])
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        
          <Route path='/auth'>
            <AuthPage />
          </Route>
       
      
          
      
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
