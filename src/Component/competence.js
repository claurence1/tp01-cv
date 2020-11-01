import React from "react";
import {Image, Box, Text} from "grommet";

const Competence = ({ logo, visible, value, event }) => {

    return (
        <Box onClick={event}>
            {visible && (
                <Text size="large">{value}</Text>
            )}
            {!visible && (
                <Image style={styleLogo} src={logo} Hidden={visible}/>
            )}
        </Box>
    );
}

const styleLogo = {
    height:'40px',
    width:'40px'
};

export default Competence

