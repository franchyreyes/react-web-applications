import { loadAllPlayers, loadPlayersInProgress, loadPlayersFailure, removePlayer } from "../actions/PlayerActions";

export const loadPlayers = () => async (dispatch, getState) => {

    try {
        dispatch(loadPlayersInProgress());
        const response = await fetch('http://localhost:8080/players');
        const players = await response.json();
        dispatch(loadAllPlayers(players));
    } catch (e) {
        console.log(e);
        dispatch(loadPlayersFailure());
        dispatch(displayAlert(e));
    }
};

export const removePlayerRequest = (id) => async (dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/players/${id}`, {
            method: 'delete',
        });
        const removedPlayer = await response.json();
        dispatch(removePlayer(removedPlayer));
    } catch (e) {
        dispatch(displayAlert(e));
    }
};

export const displayAlert = (text) => () => {
    alert(text);
};