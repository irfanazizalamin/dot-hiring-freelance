import Image from "next/image";
import clsx from "clsx";

export default function TestimoniItem({}) {
  return (
    <div className="flex justify-between mt-4 gap-4">
      <Image
        src="/assets/images/avatar-testimoni.png"
        width={44}
        height={44}
        alt="avatar-testimoni"
        className="flex-start self-start"
      />

      <div className="flex flex-col">
        <p className="text-body font-semibold">Budi Setiadi</p>
        <p className="text-label mt-1 text-gray-500">
          Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat
          Bangun
        </p>
      </div>
    </div>
  );
}
