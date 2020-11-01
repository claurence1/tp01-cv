import { Box, Carousel, Image, Text } from 'grommet';
import React from 'react';
import data from "../Ressources/resumeData";

const Realisation = () => {
  return (
      <Box height="medium" justify="center" width="large" margin="0 auto" background="light-1">
        <Carousel fill>
        {imageProjets}
        </Carousel>
      </Box>
  );
}

const styleImage = {
    height:'100px'
};

const imageProjets = data.realisation.projects.map((projet) => <Box>
    <Image style={styleImage} src={projet.image} />
    <Text> {projet.description}</Text>
</Box>);

export default Realisation;