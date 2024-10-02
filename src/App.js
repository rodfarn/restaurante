import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://pizzadays.local/wp-json/wp/v2/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
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