import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonsQuery } from '../../features/pokemonApISlice/pokemonApISlice';
import styles from './PokemonsPage.module.scss';

export const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonsPage = () => {
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery();
  const navigate = useNavigate();
  return (
    <div className={styles.allcards}>

      {data && data.results.map(({ name, url }) => {
        const arr = url.split('/');
        const id = arr[arr.length - 2];
        return (
          <div
            key={Math.random()}
            className={styles.singlecard}
          >
            <img
              src={`${imgBaseUrl}${id}.png`}
              alt=""
              height="100"
            />
            <button
              onClick={() => (navigate(`/pokemon/${name}`))}
            >
              Name:
              {' '}
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonsPage;
