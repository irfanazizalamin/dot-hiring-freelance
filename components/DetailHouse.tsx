import clsx from "clsx";

export default function DetailHouse({
  houseInfo,
  className,
}: {
  houseInfo: {
    thumbnail: string;
    title: string;
    subtitle: string;
  };
  className?: string;
}) {
  const { thumbnail, title, subtitle } = houseInfo;

  return (
    <a
      className={clsx(
        "relative flex flex-col text-gray-700 bg-white border bg-clip-border rounded-xl w-full md:min-w-[294px] md:max-w-[294px]",
        className
      )}
    >
      <div className="relative m-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-md h-44">
        <img
          src={thumbnail}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h5 className="text-h5 font-bold mb-2">{title}</h5>
        <div className="text-label">{subtitle}</div>
      </div>
    </a>
  );
}
