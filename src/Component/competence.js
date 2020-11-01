import {Box, Distribution, Image, Text} from 'grommet';
import React from 'react';
import data from "../Ressources/resumeData";

const Competence = ({ type }) => {
    return (
        <Box className="competence">
            {type === 'Loisir' && (
                <Distribution
                    values={[
                        {value: 50,  label: 'test12', color: 'light-3'},
                        {value: 30, label: 'test02', color: 'brand'},
                        {value: 20, label: 'test03', color: 'graph-0'},
                        {value: 10, label: 'test04', color: 'light-3'},
                        {value: 5, label: 'test05', color: 'brand'},
                    ]}>
                    {value => (
                        <Box pad="small" background={value.color} fill>
                            <Text size="large">{value.label}</Text>
                        </Box>
                    )}
                </Distribution>
            )}
            {type === 'Techno' && (
                <Distribution
                    values={[
                        {value: 50, color: 'light-3'},
                        {value: 30, color: 'brand'},
                        {value: 20, color: 'graph-0'},
                        {value: 10, color: 'light-3'},
                        {value: 5, color: 'brand'},
                    ]}>
                    {value => (
                        <Box pad="small" background={value.color} fill>
                            <Text size="large">{value.value}</Text>
                        </Box>
                    )}
                </Distribution>
            )}
        </Box>
    );

}

const competencesLoisir = data.resume.skills.map((skill) => <Image fit="cover" src={skill.image} />);

const competenceLoisir1 = data.resume;
const competenceLoisir2 = data.main;
const competenceLoisir3 = data.main;
const competenceLoisir4 = data.main;
const competenceLoisir5 = data.main;

export default Competence;