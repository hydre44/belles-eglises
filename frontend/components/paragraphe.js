export function Paragraph({ urlImage, titre, description }) {
  return (
    <div>
      <div className="text-3xl text-[#4C2719] text-center bg-[#B3A090]">
        {titre}
      </div>
      <div className="text-xl text-[#707070] text-justify bg-[#B3A090]">
        {description}
      </div>
      <div className="bg-[#DBCCAA]">
      <img
        className=" py-2 w-max-96 object-cover justify-center h-96 mx-auto rounded-3xl"
        src={urlImage}
      ></img>
    </div>
    </div>
  );
}
