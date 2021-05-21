export const LOAD_ALL_PLAYERS = 'LOAD_ALL_PLAYERS';
export const loadAllPlayers = (players) => ({
    type: LOAD_ALL_PLAYERS,
    payload: { players }
});

export const LOAD_PLAYERS_IN_PROGRESS = 'LOAD_PLAYERS_IN_PROGRESS';
export const loadPlayersInProgress = () => ({
    type: LOAD_PLAYERS_IN_PROGRESS,
});

export const LOAD_PLAYERS_FAILURE = 'LOAD_PLAYERS_FAILURE';
export const loadPlayersFailure = () => ({
    type: LOAD_PLAYERS_FAILURE,
});

export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const removePlayer = player => ({
    type: REMOVE_PLAYER,
    payload: { player }
});
