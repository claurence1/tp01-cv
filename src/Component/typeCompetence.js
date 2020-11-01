import {Box, Distribution, Text, Card} from 'grommet';
import React, {useState} from 'react';
import data from "../Ressources/resumeData";
import Competence from "./competence";

const TypeCompetence = ({ type }) => {

    const [visible, setVisible] = useState('true');

    const handleClick = ({}) => {
        setVisible(visible === 'true' ? 'false' : 'true')
    };

    return (
        <Card className="competence">
            {type === 'Loisir' && (
                <Distribution
                    values={[
                        {value: 40, label: 'Java', urlLogo: data.logo.Java ,color: '#FFCA58'},
                        {value: 30, label: 'HTML', urlLogo: data.logo.HTML, color: 'brand'},
                        {value: 20, label: 'JavaScript', urlLogo: data.logo.JS, color: 'graph-0'},
                        {value: 10, label: 'Angular', urlLogo: data.logo.Angular, color: '#318ce7'},
                        {value: 5, label: 'CSS', urlLogo: data.logo.CSS, color: 'brand'},
                    ]}>
                    {value => (
                        <Box pad="small" background={value.color} fill>
                            <Competence event={handleClick} visible={visible} value={value.label} logo={value.urlLogo} size="large"/>
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

export default TypeCompetence;