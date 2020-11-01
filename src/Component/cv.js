import { Box, Carousel, Image } from 'grommet';
import React from 'react';

const cv = () => {
    return (
        <Box height="small" width="medium" overflow="hidden">
        <Carousel fill>
            <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
        </Carousel>
    </Box>)
}

export default cv;