import { Commentaire } from "./commentaire";
export function Commentaires({ commentaires }) {
  return (
    <div className="bg-[#DBCCAA] border-b-2 border-[#707070]">
      <Commentaire
        NomUtilisateur={commentaires[0].NomUtilisateur}
        date={commentaires[0].date}
        texteCommentaire={commentaires[0].texteCommentaire}
        rating={commentaires[0].rating}
      ></Commentaire>
      <Commentaire
        nomUtilisateur={commentaires[1].nomUtilisateur}
        date={commentaires[1].date}
        texteCommentaire={commentaires[1].texteCommentaire}
        rating={commentaires[1].rating}
      ></Commentaire>

      <a href="https://google.com">
        <div className="bg-[#B3A090] flex justify-between ">
          <div className="font-semibold text-2xl mt-4 text-[#707070]">
            Voir Plus +
          </div>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-116 w-16 text-[#707070]"
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
        </div>
      </a>
    </div>
  );
}
