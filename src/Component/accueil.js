import React from 'react';
import data from "../Ressources/resumeData";


const Accueil = () => {
  return (
      <section id="about">
        <div className="row">
          <div>
            <img src={image} alt="Photo profil Camille" />
          </div>
          <div>
            <h2>Me concernant</h2>

            <p>{bio}</p>
            <div className="row">
              <div>
                <h2>Contact</h2>
                <p className="adresse">
                  <span>{nom}</span><br />
                  <span>{rue}<br />
                    {ville} {pays}, {codePostal}
                   </span><br />
                  <span>{telephone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={cv} className="button"><i className="fa fa-download"></i>Télécharger mon CV</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
  );
}

const { nom, image, bio } = data.main;
const { rue, ville, pays, codePostal } = data.main.adresse;
const telephone= data.main.telephone;
const email = data.main.email;
const cv = data.main.cv;

export default Accueil;
