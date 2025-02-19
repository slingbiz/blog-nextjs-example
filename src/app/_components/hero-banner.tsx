import Image from 'next/image';

export function HeroBanner() {
  return (
    <div className="relative bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src="/images/hero-banner.jpg"
              alt="People working on laptops"
              width={1216}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Take control of your</span>
              <span className="block text-indigo-200">customer support</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
                <p>
                  &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                  alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <Image
                      className="mx-auto h-10 w-10 rounded-full"
                      src="/images/testimonial-avatar.jpg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">Judith Black</div>

                    <svg className="mx-1 hidden h-5 w-5 text-indigo-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}