import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-lg lg:flex">
        
          Fundación Acción Neurodivergente&nbsp;
       
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdGT4FWZ56Rw4wGkZfkwxFSdZZgtvSgfz2YKfuxoQ1xRfQMeA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
             <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Cuestionario Neurodivergente Laboral{" "}
            </p>
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logoFAN2.jpg"
          alt="Fundacion Neurodivergencia en Acción Logo"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="mb-32 grid lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Visión{" "}
           
          </h2>
          <p className="m-0 max-w-[30ch] text-lg opacity-80">
          Un mundo laboral donde la neurodivergencia sea plenamente valorada y las personas neurodivergentes tengan las mismas oportunidades para alcanzar su máximo potencial, contribuyendo así a una sociedad más inclusiva y productiva
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Misión{" "}
           
          </h2>
          <p className="m-0 max-w-[30ch] text-lg opacity-80">
          Promover el entendimiento y la inclusión de la neurodiversidad en el entorno laboral. 
          Empezamos por visibilizar datos de las experiencias laborales diarias de personas neurodivergentes que trabajan o trabajaron en STEAM
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Quienes somos{" "}
        
          </h2>
          <p className="m-0 max-w-[30ch] text-lg opacity-80">
            Somos un equipo de 5 personas en EEUU y España que se han unido en una organización que quiere <strong> transformar el panorama laboral en STEAM, asegurando igualdad, comprensión y éxito para todos los neurodivergentes</strong>

          </p>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=contacta@fan.org"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contacto{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-lg opacity-80">
  
            contacta@fan4.us
          </p>
        </a>
      </div>
    </main>
  );
}
