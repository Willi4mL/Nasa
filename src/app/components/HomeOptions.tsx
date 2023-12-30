import { Parallax } from "react-scroll-parallax";

export default function HomeOptions() {
  const roundedIconProperties =
    "bg-greenColor w-28 h-28 flex flex-wrap items-center justify-center rounded-full text-xl font-mono text-whiteTextColor cursor-pointer";

  const breakpointsContainer =
    "flex mobile:flex-col mobile:items-center mobile:space-y-10 laptop:flex-row laptop:justify-evenly laptop:space-y-0 laptop:items-start";

  return (
    <Parallax speed={0}>
      <div className="w-full h-full min-h-screen pb-36 bg-darkBlueColor py-16">
        <section className={breakpointsContainer}>
          <div className="flex flex-col items-center mobile:w-3/4 tablet:w-2/4 laptop:w-1/4">
            <a href="https://api.nasa.gov/" target="blank">
              <div className={roundedIconProperties}>Nasa API</div>
            </a>
            <p className="text-whiteTextColor my-8">
              NASA's APIs offer open access to a variety of data, including
              Earth science, astronomy, and Mars rover photos. Developers can
              access information on climate, satellite imagery, celestial
              bodies, and more. Specific APIs cover Earth Science, Mars Rover
              Photos, Exoplanet Archive, Near-Earth Objects, TechPort
              (technology projects), and the International Space Station,
              allowing integration of NASA data into applications and research
              projects. For the latest information, refer to NASA's official
              website.
            </p>
          </div>
          <div className="flex flex-col items-center mobile:w-3/4 tablet:w-2/4 laptop:w-1/4">
            <a
              href="https://www.sciencedaily.com/news/space_time/space_exploration/"
              target="blank"
            >
              <div className={roundedIconProperties}>Science</div>
            </a>{" "}
            <p className="text-whiteTextColor my-8">
              "Space & Time," likely covers a range of topics related to space
              exploration. This could include articles on recent space missions,
              astronomical discoveries, advancements in space technology, and
              other developments in the field of space science. For the most
              accurate and up-to-date information, it's recommended to visit the
              website directly
            </p>
          </div>
          <div className="flex flex-col items-center mobile:w-3/4 tablet:w-2/4 laptop:w-1/4">
            <a href="https://skfb.ly/o9pPT" target="blank">
              <div className={roundedIconProperties}>3D Model</div>
            </a>
            <p className="text-whiteTextColor my-8">
              "Animated Floating Astronaut in Space Suit Loop" by LasquetiSpice
              is licensed under Creative Commons Attribution
            </p>
          </div>
        </section>
      </div>
    </Parallax>
  );
}
