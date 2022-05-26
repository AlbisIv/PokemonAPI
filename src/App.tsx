// npm i axios
// npm install react-router-dom@6

import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import { AppDispatch, RootState } from './store/store';
import { useGetAllPokemonsQuery } from './features/pokemonApISlice/pokemonApISlice';
import PokemonPage from './Pages/PokemonPage/PokemonPage';
import PokemonsPage from './Pages/PokemonsPage/PokemonsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PokemonsPage />} />
      <Route path="/pokemon/:name" element={<PokemonPage />} />
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  </Router>
);

export default App;
