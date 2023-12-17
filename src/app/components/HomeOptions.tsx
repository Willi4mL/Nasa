import { Parallax } from "react-scroll-parallax";

export default function HomeOptions() {
  const roundedIconProperties =
    "bg-greenColor w-28 h-28 flex items-center justify-center rounded-full text-xl font-mono text-whiteColor hover:animate-ping cursor-pointer";

  const breakpointsContainer =
    "flex mobile:flex-col mobile:items-center mobile:space-y-10 laptop:flex-row laptop:justify-evenly laptop:space-y-0";

  return (
    <Parallax speed={1}>
      <div className="w-full h-full min-h-screen pb-36 bg-darkBlueColor py-16">
        <section className={breakpointsContainer}>
          <div className="flex flex-col items-center mobile:w-3/4 tablet:w-2/4 laptop:w-1/4">
            <div className={roundedIconProperties}>1</div>
            <p className="text-whiteColor my-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
          <div className="flex flex-col items-center mobile:w-3/4 tablet:w-2/4 laptop:w-1/4">
            <div className={roundedIconProperties}>2</div>
            <p className="text-whiteColor my-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
          <div className="flex flex-col items-center mobile:w-3/4 tablet:w-2/4 laptop:w-1/4">
            <div className={roundedIconProperties}>3</div>
            <p className="text-whiteColor my-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
        </section>
      </div>
    </Parallax>
  );
}
