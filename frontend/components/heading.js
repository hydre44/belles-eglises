export function Heading({ churchName, author }) {
  return (
    <div className="bg-[#B3A090] pl-4">
      <div className="sm:flex hidden">
        <div className="flex-grow">
          <div className="text-[#3D5467]">proposé par {author}</div>
          <h1 className="px-8 text-3xl text-[#4C2719] font-bold">
            {churchName}
          </h1>
        </div>
        <figure>
          <img
            className="w-20 h-20"
            src="https://belleseglisesapp.api-and-you.com/imagecall/200x200/6432"
            alt="monument histoire"
          />
        </figure>
      </div>
    </div>
  );
}
