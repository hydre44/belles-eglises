import { DarkButton } from "./Darkbutton";
export function ButtonContainer({ buttons }) {
  return (
    <div className="bg-[#B3A090] p-4 pl-8 text-center">
      {buttons.map((element) => {
        return (
          <DarkButton
            buttonName={element.buttonName}
            buttonHref={element.buttonHref}
          ></DarkButton>
        );
      })}
    </div>
  );
}
