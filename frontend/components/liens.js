import { Lien } from "./lien";
export function Liens({ liens, idEglise }) {
  console.log("les liens: ", liens);
  return (
    <div>
      {liens &&
        liens.length > 1 &&
        liens.map((element) => {
          return (
            <Lien
              nomLien={element.titre}
              image={"http://localhost:1337" + element.miniature.url}
              descriptionImage={element.miniature.name}
              lien={
                "http://localhost:3000/rubriqueEglise?section=" +
                element.id +
                "&eglise=" +
                idEglise
              }
            ></Lien>
          );
        })}
    </div>
  );
}
