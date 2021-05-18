import React from 'react';
import styled from 'styled-components'
import ball from '../../../public/images/baloncesto.png'

const ListWrapperItemDIV = styled.div`
      background-color: #f1f1f1;
      width:48%;
      margin: 5px;
      padding: 20px;             
      text-align:center;      
`;

const CircleDIV = styled.div`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: ${props => (props.color || '#1E9B99')};
    margin: auto;    
`;

const Button = styled.button`
        font-size: 16px;
        padding: 8px;
        border: none;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
        display: inline-block;
`;

const ButtonsContainer = styled.div`
    background: #f1f1f1;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 2px 2px grey;     
    text-align: right;
`;

const TextContainer = styled(ButtonsContainer)`
    text-align: center;
    font-size:18px;
    padding: 6px;
    margin-top: 8%;
    box-shadow: 3px 3px 1px ${props => (props.color || '#1E9B99')};
    border: 1px solid ${props => (props.color || '#1E9B99')};
`;


const RemoveButton = styled(Button)`        
    background-color: #ee2222;
    margin-left: 8px;
    color:white;
`;

const Text = styled.p`
    display:inline-block;
    text-align:center;    
    font-size:30px;
    color:white;
`;

const PlayerListItem = ({ player, onDeletePlayer }) => {

    let mpv = [];
    for (let index = 0; index < player.mvp; index++) {
        mpv.push(index);
    }

    const imgBall = mpv.map((number) =>
        // Correcto! La key debería ser especificada dentro del array.
        <img key={number.toString()} src={ball} width="50" height="50" />
    );

    return (
        <>
            <ListWrapperItemDIV>
                <h2>{player.team}</h2>
                <br />
                <CircleDIV color={player.color}>
                    <Text>{player.backNumber}</Text>
                </CircleDIV>
                <TextContainer color={player.color}>
                    <p>{player.name}</p>
                </TextContainer>
            </ListWrapperItemDIV>
            <ListWrapperItemDIV>
                <h3>Point: {player.points}</h3>
                <progress id="file" value={player.points} max="100"> 32% </progress>
                <br />
                <br />
                <h3>MVP</h3>
                {imgBall}
                <ButtonsContainer>
                    <RemoveButton onClick={(() => onDeletePlayer(player.id))}>Delete</RemoveButton>
                </ButtonsContainer>

            </ListWrapperItemDIV>
        </>
    );
};

export default PlayerListItem;