import React, {useState} from "react";
import {Button, Box} from "grommet";
import Competence from "./competence";

const Talent = () => {
    const [choice, setChoice] = useState('loisir');

    const handleClick = () => {
        setChoice(choice === 'loisir' ? 'techno' : 'loisir')
    };

    return (
        <Box>
            <Button onClick={handleClick}>{choice}</Button>
            <Competence type={choice}/>
        </Box>
    );
}

export default Talent

