import { CommentairesVisiteur } from "../components/commentairesVisiteur";
import { ContactEtInfo } from "../components/contactEtInfo";
import { Heading } from "../components/heading";
import { Description } from "../components/description";
import { Commentaires } from "../components/commentaires";
import { Adresse } from "../components/adresse";
import { ButtonContainer } from "../components/buttonContainer";
import { Liens } from "../components/liens";
import { Horaires } from "../components/horaires";
import { SourceEtCrédits } from "../components/source";
import { Signal } from "../components/signal";
import { Notes } from "../components/Note";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Eglise() {
  const [hasError, setErrors] = useState(false);
  const [fetchedEglises, setFetchedEglises] = useState({});
  const router = useRouter();
  console.log("le router: ", router.query.eglise);
  async function fetchData() {
    const res = await fetch(
      "http://localhost:1337/eglises/" + router.query.eglise
    );
    res
      .json()
      .then((res) => {
        setFetchedEglises(res);
        console.log(res);
      })
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, [router.query.eglise]);

  const fetchedData = {
    buttons: [
      {
        buttonName: "itinéraire",
        buttonHref: "#",
      },
      {
        buttonName: "partager",
        buttonHref: "#",
      },
      {
        buttonName: "ajouter aux favoris",
        buttonHref: "#",
      },
    ],
    liens: [
      {
        nomLien: "historique",
        image:
          "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3304",
        descriptionImage: "image historique",
        lien: "http://localhost:3000/rubriqueEglise",
      },
      {
        nomLien: "L'extérieur",
        image:
          "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3295",
        descriptionImage: "image extérieur",
        lien: "#",
      },
      {
        nomLien: "Plan de la cathédrale",
        image:
          "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3270",
        descriptionImage: "image PLan",
        lien: "#",
      },
      {
        nomLien: "L'intérieur",
        image:
          "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3296",
        descriptionImage: "image intérieur",
        lien: "#",
      },
      {
        nomLien: "Les cryptes",
        image:
          "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3273",
        descriptionImage: "image cryptes",
        lien: "#",
      },
    ],
    contactInfo: [
      {
        NomInfo: "secrétariat de la cathedrale",
        NomLien: "https://google.com",
      },
      { NomInfo: "office du tourisme de Nantes metropole", NomLien: "#" },
      { NomInfo: "Site officiel de la Cathédrale de Nantes", NomLien: "#" },
      { NomInfo: "Les Amis de la cathédrale et de l'Immaculé", NomLien: "#" },
    ],
    commentaires: [
      {
        nomUtilisateur: "toto",
        date: "24/06/2021",
        texteCommentaire: "trzfuhueighyue",
        rating: 5,
      },
      {
        nomUtilisateur: "trotro",
        date: "aujourd'hui",
        texteCommentaire: "trzfuhueigyue",
        rating: 1,
      },
    ],
  };

  return (
    <div>
      {fetchedEglises.Header && (
        <div>
          <Heading
            churchName={fetchedEglises.Header.titre}
            author={fetchedEglises.Header.auteur_principal.username}
          ></Heading>
          <ButtonContainer buttons={fetchedData.buttons}></ButtonContainer>
          <div className="bg-[#DBCCAA]">
            <img
              className="w-full max-w-2xl mx-auto h-96 object-cover"
              src={
                "http://localhost:1337" +
                fetchedEglises.Header.Photo_principale[0].url
              }
              alt="photo de la cathedrale"
            />
          </div>
          <Notes></Notes>
          <Adresse
            city={fetchedEglises.Header.adresse.ville}
            departement={fetchedEglises.Header.adresse.departement}
            street={fetchedEglises.Header.adresse.adresse}
          ></Adresse>
          <Description
            description={fetchedEglises.Header.description}
          ></Description>
          <Liens
            liens={fetchedEglises.sections}
            idEglise={fetchedEglises.id}
          ></Liens>
          <CommentairesVisiteur nombreCommentaires="7"></CommentairesVisiteur>
          <Commentaires commentaires={fetchedData.commentaires}></Commentaires>
          <div className="bg-[#DBCCAA] border-2 border-[#707070]">
            <div className="font-semibold text-3xl text-[#030303]">
              contact et info
            </div>
          </div>
          {fetchedData.contactInfo.map((item) => {
            return (
              <ContactEtInfo
                nomLien={item.NomLien}
                NomInfo={item.NomInfo}
              ></ContactEtInfo>
            );
          })}
          <Horaires
            Horaire={fetchedEglises.bas_de_page.info_horaires}
          ></Horaires>
          <Signal signal={fetchedEglises.problemes.lenght}></Signal>
          <SourceEtCrédits
            sourceAndCredits={fetchedEglises.bas_de_page.source}
          ></SourceEtCrédits>
        </div>
      )}
    </div>
  );
}
