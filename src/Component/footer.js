import React from "react";
import {Image, Footer, Text, Anchor} from "grommet";
import data from "../Ressources/resumeData";

const PiedDePage = () => {

    var reseauxSociaux = data.main.social.map((reseau) => <a href={reseau.url}><Image alt={reseau.nom} src={reseau.className} /></a>);
    return (
        <Footer className="foot" background="brand" position="fixed" bottom="0">
            <Text>Copyright</Text>
            <Anchor label="About" />
              {reseauxSociaux}
        </Footer>
    );
}

export default PiedDePage

