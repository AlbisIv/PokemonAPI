import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from '../features/counter/counterSlice';
// import { counterSlice } from '../features/counter/counterSlice';
import counterReducer from '../features/counter/counterSlice';
import { pokemonApi } from '../features/pokemonApISlice/pokemonApISlice';
import toDoReducer from '../features/ToDoSlice/ToDoSlice';

// TODO Pieprasīt visus pokemonu datus
// TODO attēlot visus pokemonu datus HomePage gridā
// TODO Uz pogas klikšķa aizvest uz atsevišķa pokemona lapu
// TODO
// TODO
// TODO

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
