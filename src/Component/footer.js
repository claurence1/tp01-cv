import React from "react";
import { Footer, Text, Anchor} from "grommet";
import { Facebook, Linkedin, Instagram, Github } from "grommet-icons"

const PiedDePage = () => {

    return (
        <Footer className="foot" background="#318ce7" position="fixed" bottom="0">
            <Text>Copyright</Text>
            <Anchor label="About" />
            <a href="https://www.facebook.com/laurence.camille"><Facebook /></a>
            <a href="https://www.linkedin.com/in/laurence.camille/"><Linkedin/></a>
            <a href="https://www.instagram.com/laurence.camille/"><Instagram/></a>
            <a href="http://github.com/laurence.camille"><Github/></a>
        </Footer>
    );
}

export default PiedDePage

