import Button from "./atom/Button";
import Image from "next/image";
import clsx from "clsx";

export default function DesignCard({
  data,
  isSideBar,
  className,
}: {
  data: { title: string };
  isSideBar?: boolean;
  className?: string;
}) {
  const { title } = data;

  const informations = [
    {
      title: "Dimensi Tanah",
      info: "15 x 8m",
      icon: "material-symbols",
    },
    {
      title: "Luas Bangunan",
      info: "112m2",
      icon: "house-swap",
    },
    {
      title: "Lantai",
      info: "2",
      icon: "stairs",
    },
    {
      title: "Kamar Tidur",
      info: "4",
      icon: "bedroom",
    },
  ];

  return (
    <>
      <div
        className={clsx(
          "relative flex-col text-gray-700 bg-white border bg-clip-border rounded-xl w-full md:min-w-[316px] md:max-w-[316px] p-4",
          className,
          isSideBar && "hidden md:flex",
          !isSideBar && "md:flex"
        )}
      >
        {!isSideBar && (
          <div className="relative overflow-hidden text-gray-700 bg-white bg-clip-border rounded-md h-64">
            <img
              src="/assets/images/design-thumbnail.png"
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className={clsx(!isSideBar && "mt-4")}>
          <div className="flex gap-2 items-center mb-2">
            <h5 className="text-h5 font-bold">{title}</h5>
            {!isSideBar && (
              <div className="rounded-full px-3 py-1 bg-gray-100 text-label">
                Scandinavian
              </div>
            )}
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src="/assets/images/avatar-studio.png"
              width={28}
              height={28}
              alt="avatar-studio"
            />
            <div className="text-label">Studio SAe</div>
          </div>
        </div>

        {isSideBar && (
          <>
            <div className="mt-4">
              <div className="flex gap-6">
                <div className="text-label text-gray-600">Jenis Rumah</div>
                <div className="text-label">Scandinavian</div>
              </div>
              <div className="flex gap-6 mt-2">
                <div className="text-label text-gray-600">Tipe Desain</div>
                <div className="text-label text-red-500">
                  Datap Dimodifikasi
                </div>
              </div>
            </div>

            <div className="mt-4">
              <hr />
            </div>
          </>
        )}

        <div className="mt-4">
          <div className="flex justify-between">
            {informations.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/assets/icons/${item.icon}.svg`}
                  width={24}
                  height={24}
                  alt={item.title}
                  className="mb-0.5"
                />
                <div className="text-label2 text-gray-400">{item.title}</div>
                <div className="text-label">{item.info}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <hr />
        </div>

        <div className="mt-4">
          <p className="text-label">Harga Desain</p>
          <h4 className="text-h4 font-semibold mt-1">Rp. 32.500.00</h4>
          <p className="text-label text-gray-400">
            Harga konstruksi mulai dari Rp 560.000.000
          </p>
        </div>

        <div className="mt-4">
          {isSideBar ? (
            <Button variant="primary" size="lg" className="block w-full">
              Konsultasi Sekarang
            </Button>
          ) : (
            <Button variant="secondary" size="md" className="block w-full">
              Lihat Detail
            </Button>
          )}
        </div>
      </div>

      {isSideBar && (
        <div
          className={clsx(
            "md:hidden flex flex-col text-gray-700 bg-white w-full p-4 fixed bottom-0 left-0 z-10",
            className
          )}
        >
          <div>
            <p className="text-label">Harga Desain</p>
            <h4 className="text-h4 font-semibold mt-1">Rp. 32.500.00</h4>
            <p className="text-label text-gray-400">
              Harga konstruksi mulai dari Rp 560.000.000
            </p>
          </div>

          <div className="mt-4">
            {isSideBar ? (
              <Button variant="primary" size="lg" className="block w-full">
                Konsultasi Sekarang
              </Button>
            ) : (
              <Button variant="secondary" size="md" className="block w-full">
                Lihat Detail
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
