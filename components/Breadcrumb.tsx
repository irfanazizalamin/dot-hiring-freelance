export default function Breadcrumb() {
  return (
    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-label md:text-body">
      <li className="inline-flex items-center">
        <a
          href="#"
          className="inline-flex items-center font-medium text-red-500 hover:text-black"
        >
          Home
        </a>
      </li>
      <svg
        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <li>
        <a
          href="#"
          className="inline-flex items-center font-medium text-red-500 hover:text-black"
        >
          Layanan Desain
        </a>
      </li>
      <svg
        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <li aria-current="page">
        <span className="ms-1 font-medium text-gray-500 md:ms-2 dark:text-gray-400">
          Omah Apik 3
        </span>
      </li>
    </ol>
  );
}
