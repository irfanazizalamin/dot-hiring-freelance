import Image from "next/image";

const productsAndServices = [
  "Renovasi",
  "Bangun Rumah",
  "Layanan Desain",
  "Teknologi Tambahan",
  "Beli Material",
];

const aboutUs = [
  "Tentang SobatBangun",
  "Kebijakan Dan Privasi",
  "Syarat Dan Ketentuan",
  "FAQ",
  "Daftar Menjadi Mitra",
];

const partnersContent = [
  {
    title: "Kredit Bangun Rumah",
    partners: ["bank-mandiri", "bank-btn", "bank-bri"],
  },
  {
    title: "Tunai Via Bank Transfer",
    partners: ["bank-mandiri", "bank-bri", "bank-bni", "bank-permata"],
  },
  {
    title: "Kartu Kredit",
    partners: ["visa", "master-card", "jcb"],
  },
  {
    title: "Rekan Teknologi Tambahan",
    partners: ["asco", "ineco-solar", "adidaya", "agra-surya-energy"],
  },
];

export default function Footer({}) {
  return (
    <footer className="bg-[#012846] text-white w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="col-span-2">
            <Image
              src="/assets/images/logo-light.png"
              width={170}
              height={48}
              alt="logo-light"
              className="flex-start self-start"
            />
            <p className="text-label mt-4">
              SobatBangun adalah platform digital dari SIG yang bergerak dengan
              misi mengembangkan proses pembangunan dan renovasi rumah secara
              lebih baik serta berkelanjutan.
            </p>
            <div className="mt-2">
              <p>
                Email:{" "}
                <a href="#" className="underline">
                  sobat@sobatbangum.com
                </a>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-body mb-4">Social Media</p>
              <div className="flex mt-4 space-x-5">
                <a
                  href="#"
                  className="flex items-center text-[#2C373E] justify-center bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#2C373E]"
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-[#2C373E] justify-center bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#2C373E]"
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-[#2C373E] justify-center bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#2C373E]"
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
                  </svg>
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-6 text-h5 font-semibold">Produk & Layanan</h5>
            <ul>
              {productsAndServices.map((item, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-6 text-h5 font-semibold">Tentang Kami</h5>
            <ul>
              {aboutUs.map((item, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {partnersContent.map((content, contentIndex) => (
            <div key={contentIndex}>
              <h6 className="text-h6 font-semibold">{content.title}</h6>
              <div className="flex mt-1 space-x-6">
                {content.partners.map((partner, partnerIndex) => (
                  <Image
                    key={partnerIndex}
                    src={`/assets/images/footer/${partner}.png`}
                    width={56}
                    height={56}
                    alt={`logo-${partner}`}
                    className="self-center"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-6 flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4 items-center">
            <p>Powered by:</p>
            <Image
              src="/assets/images/logo-sig.png"
              width={71}
              height={41}
              alt="logo-sig"
              className="flex-start self-start"
            />
          </div>
          <span className="text-sm  sm:text-center">
            Copyright © 2023 <a href="#">SobatBangun</a>. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
