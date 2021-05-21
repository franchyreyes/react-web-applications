import { LOAD_ALL_PLAYERS, LOAD_PLAYERS_FAILURE, LOAD_PLAYERS_IN_PROGRESS, REMOVE_PLAYER } from "../actions/PlayerActions";

const initialState = { isLoading: false, data: [] };


export const players = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_PLAYERS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true
            }
        case LOAD_ALL_PLAYERS: {
            const { players } = payload;
            return {
                ...state,
                isLoading: false,
                data: players
            }
        }
        case LOAD_PLAYERS_FAILURE:
            return {
                ...state,
                isLoading: false
            }
            break;
        case REMOVE_PLAYER: {
            const { player: removedPlayer } = payload;
            return {
                ...state,
                data: state.data.filter(player => player.id !== removedPlayer.id)
            };
        }
        default:
            return state;

    }

};