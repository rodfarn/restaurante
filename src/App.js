import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://pizzadays.local/wp-json/wp/v2/posts") // Usa la URL de tu sitio en Flywheel
      .then((res) => {
        setPosts(res.data); // Guardar las publicaciones en el estado
      })
      .catch((err) => {
        console.error('Error al obtener las publicaciones:', err);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeScreen posts={posts} />
        </Route>
        <Route path="*">
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
