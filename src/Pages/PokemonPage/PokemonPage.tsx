import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../features/pokemonApISlice/pokemonApISlice';
import { imgBaseUrl } from '../PokemonsPage/PokemonsPage';
import styles from './PokemonPage.module.scss';

const PokemonPage = () => {
  const { name } = useParams();
  const [showMoves, setShowMoves] = useState(false);
  // @ts-ignore
  const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(name);
  return (
    <div
      className={styles.main}
    >
      {(data && isSuccess && (
        <div
          className={styles.main}
        >
          <img
            src={`${imgBaseUrl}${data?.id}.png`}
            alt=""
            height="200"
          />
          <span>
            Name:
            {' '}
            {data.name}
          </span>
          <span>
            Height:
            {' '}
            {(data.height / 10).toFixed(2)}
            m
          </span>
          <span>
            Weight:
            {' '}
            {(data.weight / 10).toFixed(2)}
            kg
          </span>
          <br />
          <button
            onClick={() => (
              setShowMoves(!showMoves)
            )}
          >
            Show me some moves!
          </button>
          {(showMoves && data.moves.map((move) => (
            <div
              key={Math.random()}
              className={styles.moveCard}
            >
              <span>{move.move.name}</span>
              <span>{move.move.url}</span>
            </div>

          )))}
        </div>
      ))}
    </div>
  );
};

export default PokemonPage;
