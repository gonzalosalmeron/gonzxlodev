import CoolButton from "@/components/ui/cool-button";
import Gonzxlo from "@/components/gonzxlo";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-responsive py-8 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
    >
      <div className="flex flex-col md:flex-row justify-between gap-20 sm:gap-14 items-top">
        <div className="text-white md:max-w-xl sm:pt-10">
          <h3 className="text-lg mb-3.5">
            Hi, my name is{" "}
            <span className="text-orange-100">Gonzalo Salmerón</span>.
          </h3>
          <h2 className="text-[42px] sm:text-5xl lg:text-6xl font-semibold leading-tight">
            I design & code web applications.
          </h2>
          <p className="mt-5">
            Welcome to my Personal Website where I share my projects and
            thoughts. I am a Web Developer based in Málaga, Spain, dedicated to
            developing visually appealing and functional websites that leave a
            lasting impression.
          </p>
          {/* My passion lies in turning innovative ideas into engaging online experiences. */}
          <div className="pt-6">
            <CoolButton text="Contact me" href="#contact" textColor="text-black" width="w-full sm:w-auto" />
          </div>
        </div>

        <div className="pt-10 mx-auto px-6 md:mx-0">
          <Gonzxlo />
        </div>
      </div>
    </section>
  );
}
