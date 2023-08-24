import Image from "next/image";

export default function Gonzxlo() {
  return (
    <div className="relative w-full sm:w-[322px]">
      <div className="grid-pattern w-full aspect-square rounded-full overflow-hidden p-8 border border-0.5 relative z-10 bg-black">
        <Image
          priority
          src="/gonzxlo.webp"
          alt=""
          width="320"
          height="40"
          className="w-64"
        />
      </div>

      <div className="absolute -top-16 -left-8 sm:-left-16 -rotate-6 z-0 transform scale-75 sm:scale-100 duration-200">
        <div className="stop-on-hover animate-float text-lg font-bold uppercase text-black w-min cursor-wait">
          <p className="flex items-center gap-2 rounded-t-xl rounded-br-xl bg-emerald-600 px-3 py-1">
            Developer
          </p>
          <p className="-mt-2 flex w-min items-center gap-2 whitespace-nowrap rounded-br-xl bg-emerald-600 px-3 py-1">
            Specialist
          </p>
          <div className="-mt-8 inline-flex w-min whitespace-nowrap rounded-b-xl bg-emerald-600 px-3 py-1">
            <div className="flex items-center gap-1 rounded-full bg-black px-2 py-1 text-sm text-emerald-600">
              <p>WWW.</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-20">
        <p className="bg-black px-6 py-1.5 text-lg font-medium rounded-full shadow-[3px_3px_#A855F7] hover:shadow-[5px_5px_#A855F7] hover:-translate-x-0.5 border-[2.8px] border-purple-500 text-white duration-200 cursor-pointer">
          Gonzalo
        </p>
        <div className="absolute -bottom-7 -left-4">
          <svg
            width="29"
            height="24"
            className="scale-110 -rotate-[145deg]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                d="M13 3.2 5.5 19.5l.1.7.5.6.8.2.9-.2 6.4-3.5 6.4 3.5a1.7 1.7 0 0 0 1.6 0c.3-.2.4-.4.5-.6a1 1 0 0 0 .1-.7L15.3 3a1 1 0 0 0-.5-.5 1.4 1.4 0 0 0-1.4 0 1 1 0 0 0-.4.6Z"
                className="fill-black"
              />
              <path
                d="M13 3.2 5.5 19.5l.1.7.5.6.8.2.9-.2 6.4-3.5 6.4 3.5a1.7 1.7 0 0 0 1.6 0c.3-.2.4-.4.5-.6a1 1 0 0 0 .1-.7L15.3 3a1 1 0 0 0-.5-.5 1.4 1.4 0 0 0-1.4 0 1 1 0 0 0-.4.6Z"
                className="stroke-purple-500"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
