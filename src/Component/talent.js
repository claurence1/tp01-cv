import React, {useState} from "react";
import {Button, Box} from "grommet";
import TypeCompetence from "./typeCompetence";

const Talent = () => {
    const [choice, setChoice] = useState('Loisir');

    const handleClick = () => {
        setChoice(choice === 'Loisir' ? 'Techno' : 'Loisir')
    };

    return (
        <Box >
            <TypeCompetence type={choice}/>
            <Button style={styleButton} size="small" margin="small" primary onClick={handleClick}>{choice}</Button>
        </Box>
    );
}

const styleButton = {
    textAlign:'center',
    backgroundColor:'#D63032'};

export default Talent

