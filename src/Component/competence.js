import {Box, Distribution, Text} from 'grommet';
import React from 'react';

const Competence = ({ type }) => {
    return (
        <Box>
            {type === 'loisir' && (
                <Distribution
                    values={[
                        {value: 50, label: 'test01', color: 'light-3'},
                        {value: 30, label: 'test02', color: 'brand'},
                        {value: 20, label: 'test03', color: 'graph-0'},
                        {value: 10, label: 'test04', color: 'light-3'},
                        {value: 5, label: 'test05', color: 'brand'},
                    ]}
                >
                    {value => (
                        <Box pad="small" background={value.color} fill>
                            <Text size="large">{value.label}</Text>
                        </Box>
                    )}
                </Distribution>
            )}
            {type === 'techno' && (
                <Distribution
                    values={[
                        {value: 50, color: 'light-3'},
                        {value: 30, color: 'brand'},
                        {value: 20, color: 'graph-0'},
                        {value: 10, color: 'light-3'},
                        {value: 5, color: 'brand'},
                    ]}
                >
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
export default Competence;