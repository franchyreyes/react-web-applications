import React, { useEffect } from 'react';
import styled from 'styled-components'
import PlayerListItem from './PlayerListItem'
import { connect } from 'react-redux';
import { getPlayersLoading, getPlayersOrderByPoint } from './selectors';
import { loadPlayers, removePlayerRequest } from '../../thunks/PlayerThunk';
import Loading from '../loading/loading';


const PlayerContainer = styled.div`
    max-width: 700px;
    margin: auto;        
    display: flex;     
    justify-content: space-around;    
    box-shadow: 0 4px 8px grey;
    transition: box-shadow 0.2s;
    margin-top: 2%;

      &:hover {
            box-shadow: 0px 20px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.24);
      }
`;

const PlayerList = ({ playersOrderByPoint, startLoadingPlayer, onDeletePlayer, isLoading }) => {
    useEffect(() => {
        startLoadingPlayer();
    }, []);


    const content = playersOrderByPoint.map(
        player =>

            <PlayerContainer key={player.backNumber + 1}>
                <PlayerListItem player={player} onDeletePlayer={onDeletePlayer} />
            </PlayerContainer>

    );

    return isLoading ? <Loading /> : content;
}


const mapStateToProps = state => ({
    playersOrderByPoint: getPlayersOrderByPoint(state),
    isLoading: getPlayersLoading(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingPlayer: () => dispatch(loadPlayers()),
    onDeletePlayer: (id) => dispatch(removePlayerRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);