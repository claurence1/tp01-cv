import {Box, Distribution, Image, Text, Card} from 'grommet';
import React, {useState} from 'react';
import data from "../Ressources/resumeData";

const Competence = ({ type }) => {

    const [choice, setChoice] = useState('Loisir');

    const handleFocus = () => {
        setChoice(choice === 'Loisir' ? 'Techno' : 'Loisir')
    };

    return (
        <Card className="competence">
            {type === 'Loisir' && (
                <Distribution
                    values={[
                        {value: 40,  label: 'Java', color: '#FFCA58'},
                        {value: 30, label: 'HTML', color: 'brand'},
                        {value: 20, label: 'JavaScript', color: 'graph-0'},
                        {value: 10, label: 'Angular', color: '#318ce7'},
                        {value: 5, label: 'CSS', color: 'brand'},
                    ]}>
                    {value => (
                        <Box pad="small" background={value.color} fill>
                            <Text onFocus={handleFocus} size="large">{value.label}</Text>
                        </Box>
                    )}
                </Distribution>
            )}
            {type === 'Techno' && (
                <Distribution
                    values={[
                        {value: 40, label: 'Golf', color: '#FFCA58'},
                        {value: 30, label: 'Tennis', color: 'brand'},
                        {value: 20, label: 'Jeux-vidéo', color: 'graph-0'},
                        {value: 10, label: 'Lecture', color: '#318ce7'},
                        {value: 5, label: 'Cinéma', color: 'brand'},
                    ]}>
                    {value => (
                        <Box pad="small" background={value.color} fill>
                            <Text size="large">{value.label}</Text>
                        </Box>
                    )}
                </Distribution>
            )}
        </Card>
    );
}
export default Competence;