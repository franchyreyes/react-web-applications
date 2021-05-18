import { createSelector } from 'reselect'

export const getPlayers = state => state.players.data;


export const getPlayersOrderByPoint = createSelector(
    getPlayers,
    (players) => players.sort((p1, p2) => p1.points > p2.points)
);
