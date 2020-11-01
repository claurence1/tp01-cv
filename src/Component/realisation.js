import { Card, Carousel, Image } from 'grommet';
import React from 'react';
import data from "../Ressources/resumeData";

const Realisation = () => {
  return (
      <Card height="medium" width="large" margin="0 auto" background="light-1">
        <Carousel  fill>
        {imageProjets}
        </Carousel>
      </Card>
  );
}

const imageProjets = data.realisation.projects.map((projet) => <Image fit="cover" src={projet.image} />);

export default Realisation;