import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Paragraph } from "../components/paragraphe";

export default function MaPage() {
  const [hasError, setErrors] = useState(false);
  const [fetchedEglises, setFetchedEglises] = useState({});
  const router = useRouter();
  async function fetchData() {
    const res = await fetch(
      "http://localhost:1337/eglises/" + router.query.eglise
    );
    res
      .json()
      .then((res) => {
        setFetchedEglises(res);
      })
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, [router.query]);

  return (
    <div>
      <div className="text-3xl text-[#4C2719]  bg-[#B3A090]">
        {
          <h1>
            {
              fetchedEglises.sections.find(
                (x) => x.id == parseInt(router.query.section)
              ).titre
            }
          </h1>
        }
      </div>
      {fetchedEglises.sections && (
        <div>
          {fetchedEglises.sections
            .find((x) => x.id == parseInt(router.query.section))
            .paragraphe.map((paraph) => {
              return (
                <Paragraph
                  titre={paraph.titre}
                  description={paraph.description}
                  urlImage={"http://localhost:1337" + paraph.photo[0].url}
                ></Paragraph>
              );
            })}

          {/*  
          <div className="text-center text-5xl text-[#707070] bg-[#B3A090] p-4">
            historique
          </div>
          <div className="bg-[#DBCCAA]">
            <img
              className=" py-2 w-max-96 object-cover justify-center h-96 mx-auto rounded-3xl "
              src="https://belleseglisesapp.api-and-you.com/imagecall/500x400/3271"
              alt="cathedrale vue aerienne extérieur"
            />
          </div>
          <Paragraph
            titre={"Un site chargé d'histoire"}
            description={`
      Le site aurait été initialement occupé par un temple druidique dédié à Janus.

      Par la suite, trois édifices religieux chrétiens ont précédé l'actuelle cathédrale sur les mêmes lieux :
      
      une basilique bâtie au IVe siècle ;
      une première cathédrale, bâtie au VIe siècle ;
      une deuxième cathédrale romane, bâtie au XIe siècle.
      `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3272"
            }
          ></Paragraph>

          <Paragraph
            titre={"Saint-Clair et la première église"}
            description={`Une tradition légendaire fait remonter au IIIe siècle l'arrivée de saint Clair, premier évêque de la ville, venu de Rome en possession d’un clou qu'il affirme provenir de la croix qui supporta le martyre de saint Pierre. Il aurait fait édifier une chapelle pour abriter la relique qu’il dédie à saint Pierre et saint Paul.

        Mais c'est au IVe siècle qu'une première véritable église est implantée, là où les futurs bâtiments de la cathédrale se succèderont.
        
        Elle durera jusqu'au VIe siècle, où le besoin d'accueillir des fidèles plus nombreux poussera à l'établissement d'une première véritable cathédrale.
        
        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3304"
            }
          ></Paragraph>

          <Paragraph
            titre={"La première cathédrale"}
            description={`La construction de la première cathédrale débute au VIe siècle, à l’initiative des évêques Evhemerius puis Félix Ier. Elle est consacrée en 567 ou 568.

        Les documents historiques et diverses fouilles attestent de la richesse et de la magnificence de cette église, ce qui en fit sans doute une cible de choix pour les Normands au cours des IXe et Xe siècles. Elle fut plusieurs fois pillée et incendiée. Tableau ci-dessus d'Édouard Jolin représentant l'assassinat de Saint Gohard par les Vikings dans la Cathédrale de Nantes en 843. (à voir dans la chapelle de St Gohard.)
        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3273"
            }
          ></Paragraph>

          <Paragraph
            titre={"La cathédrale romane"}
            description={`Il faut attendre la fin du XIe siècle pour que l'édifice soit reconstruit, à l'initiative du duc Guérec. De cette époque daterait le noyau de la crypte médiévale.

        Il y a peu de détails sur cet édifice si ce n’est le chœur du XIIe siècle qui subsista jusqu’au XIXe siècle. Les statues du clocher et quelques chapiteaux sont actuellement conservés au musée départemental Dobrée.`}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3274"
            }
          ></Paragraph>

          <Paragraph
            titre={"La cathédrale actuelle"}
            description={`La construction de l’édifice actuel est initialement conduite par Guillaume de Dammartin, sous l'impulsion du duc de Bretagne Jean V et de l’évêque Jean de Malestroit, qui posent la première pierre le 14 avril 1434.

        Le milieu du XVe siècle est en effet une période propice au lancement de tels projets, la Bretagne ayant retrouvé une prospérité commerciale suffisante grâce à une politique diplomatique opportuniste et habile qui lui permet de rester relativement à l’écart des conflits entre les royaumes de France et d’Angleterre.
        
        
        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3275"
            }
          ></Paragraph>

          <Paragraph
            titre={""}
            description={`Le portail central qui orne la façade est achevé en 1481, pour les grand-messes. Henri IV la franchira en 1598, lors de son passage à Nantes pour y signer l’Édit de Tolérance.

        Si la façade est achevée dès la fin du XVe siècle, les tours ne le sont qu'en 1508 ; la nef et les collatéraux le sont également au début du XVIe siècle, mais la voûte gothique de la nef, le bras sud du transept et les arcs-boutants sont terminés au XVIIe siècle.
        
        
        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3276"
            }
          ></Paragraph>

          <Paragraph
            titre={"Sous la Révolution et l'Empire"}
            description={`Sous la Révolution, la cathédrale est utilisée comme poste d'observation militaire lors du siège de Nantes en 1793. Une tour de bois de 10 mètres de hauteur est construite sur la tour sud, et la surveillance est assurée au moyen d'un télescope. Les décisions militaires sont prises en fonction des renseignements ainsi obtenus.

        Dans cette période, elle est transformée en arsenal et en écurie, puis un arrêté départemental de 1794 la consacre officiellement à la célébration des fêtes publiques.
        
        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3277"
            }
          ></Paragraph>
          <Paragraph
            titre={"Achèvement"}
            description={`La démolition des murailles à l'est de la ville permit l'achèvement de la cathédrale au XIXe siècle: le bras nord du transept et le chevet sont entrepris en 1840, le vieux chœur roman est abattu à partir de 1876 et l'ancienne tour de la croisée du transept en 1886.

        Après 457 années de travaux, la cathédrale est enfin inaugurée le 25 décembre 1891 par Mgr Le Coq.
        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3280"
            }
          ></Paragraph>

          <Paragraph
            titre={"XXe siècle : de nouvelles péripéties"}
            description={`Les violents bombardements du 15 juin 1944 conduisent à de gros travaux de restauration.

        Ceux-ci sont presque achevés lorsque, le 28 janvier 1972, se déclenche dans les combles un gigantesque incendie (dû à un chalumeau qu’un ouvrier a malencontreusement oublié d’éteindre) qui embrase la toiture. Les pompiers parviennent à maîtriser le sinistre, mais la charpente est largement détruite, et de nombreux autres dommages sont à déplorer.
        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3279"
            }
          ></Paragraph>

          <Paragraph
            titre={""}
            description={`À la suite de ce sinistre, auquel il ne faut pas oublier d'ajouter les dégradations dues à la pollution urbaine, des travaux sont entrepris. Ceux-ci constituent sans doute la restauration intérieure et extérieure la plus complète d'une cathédrale en France. Ainsi, on profite des travaux pour reconstituer le décor de la façade ouest, telle que celle-ci se présentait à l'origine au XVe siècle

        `}
            urlImage={
              "https://belleseglisesapp.api-and-you.com/imagecall/500x400/3278"
            }
          ></Paragraph>
 */}
          <div className="bg-[#B3A090]">
            <div className="flex justify-between">
              <div className="px-6 pt-4 bg-[#B3A090] border-2 border-gray-600">
                <a
                  href="https://google.com"
                  className="flex cursor-pointer hover:bg-[#DBCCAA] justify-between items-center "
                >
                  <div className="h-28 w-28 bg-gray-400 relative">
                    <img
                      className="h-28 w-full object-cover"
                      src="https://belleseglisesapp.api-and-you.com/imagecall/500x400/3295"
                      alt="image lien histoire"
                    />
                  </div>
                  <div className="text-3xl font-medium text-[#707070]">
                    page précedente
                  </div>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class
                      Name="text-[#827963] h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                </a>
              </div>
              <div className="px-6 pt-4 bg-[#B3A090] border-2 border-gray-600">
                <a
                  href="https://google.com"
                  className="flex cursor-pointer hover:bg-[#DBCCAA] justify-between items-center "
                >
                  <div className="h-28 w-28 bg-gray-400 relative">
                    <img
                      className="h-28 w-full object-cover "
                      src="https://belleseglisesapp.api-and-you.com/imagecall/500x400/3295"
                      alt="image lien histoire"
                    />
                  </div>
                  <div className="text-3xl font-medium text-[#707070]">
                    page suivante
                  </div>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class
                      Name="text-[#827963] h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
