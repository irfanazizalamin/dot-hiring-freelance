import Breadcrumb from "@/components/Breadcrumb";
import DesignCard from "@/components/DesignCard";
import DetailHouse from "@/components/DetailHouse";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import TestimoniItem from "@/components/TestimoniItem";

export default function Home() {
  const houseDetails = [
    {
      thumbnail: "/assets/images/home-image.png",
      title: "Ruang Tamu",
      subtitle: "2.0x2.9",
    },
    {
      thumbnail: "/assets/images/home-image.png",
      title: "Kamar Tidur",
      subtitle: "4.0x3.4",
    },
    {
      thumbnail: "/assets/images/home-image.png",
      title: "Ruang Makan & Dapur",
      subtitle: "3.0x2.9",
    },
    {
      thumbnail: "/assets/images/home-image.png",
      title: "Ruang Kerja",
      subtitle: "2.0x2.9",
    },
    {
      thumbnail: "/assets/images/home-image.png",
      title: "Ruang Tidur",
      subtitle: "4.0x3.4",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />

      <section>
        <Breadcrumb />
      </section>

      <Slider />

      <section className="flex w-full flex-col md:flex-row justify-between">
        <div className="basis-[70%] w-full">
          <h4 className="text-h4 font-semibold">Tampilan Rumah</h4>
          <div className="flex flex-wrap gap-4 mt-6">
            {houseDetails.map((houseDetail, index) => (
              <DetailHouse houseInfo={houseDetail} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full md:!min-w-[364px] md:!max-w-[364px]">
          <DesignCard
            isSideBar
            data={{ title: "Omah Apik 3" }}
            className="md:!min-w-[364px] md:!max-w-[364px] md:sticky md:top-10"
          />

          <div className="mt-8">
            <h4 className="text-h4 font-semibold">Testimoni</h4>

            {[...Array(3)].map((_, index) => (
              <TestimoniItem key={index} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-h4 font-semibold">
          Desain Lainnya oleh Studio SAe
        </h4>
        <div className="flex gap-4 mt-6 flex-col md:flex-row">
          {[...Array(4)].map((_, index) => (
            <DesignCard
              data={{ title: `Omah Apik ${index + 1}` }}
              key={index}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
