import Image from "next/image";
import Button from "./atom/Button";

export default function Navbar({}) {
  return (
    <nav className="bg-white w-full z-20 top-0 start-0 static">
      <div className="container flex flex-wrap items-center justify-between mx-auto py-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/images/logo-dark.png"
            width={148}
            height={42}
            alt="logo-dark"
            className="flex-start self-start"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div>
            <Button
              variant="tertiary"
              size="sm"
              className="text-body font-semibold"
            >
              Daftar
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="text-body font-semibold"
            >
              Masuk
            </Button>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="text-body py-2 px-3 md:p-0 hover:text-red-500"
                aria-current="page"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body py-2 px-3 md:p-0 text-red-500"
                aria-current="page"
              >
                Produk & Layanan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body py-2 px-3 md:p-0 hover:text-red-500"
                aria-current="page"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body py-2 px-3 md:p-0 hover:text-red-500"
                aria-current="page"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
