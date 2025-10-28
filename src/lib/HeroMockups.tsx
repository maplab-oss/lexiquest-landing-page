import { SpringInView } from "./SpringInView";
import { contentConfig } from "./content-config";

const colors = ["bg-purple-400", "bg-green-400", "bg-orange-400"];
const heights = ["md:h-20 lg:h-48", "md:h-36 lg:h-76", "md:h-46 lg:h-96"];

const images = [
  contentConfig.assets.mockups.mockupsOne,
  contentConfig.assets.mockups.mockupsTwo,
  contentConfig.assets.mockups.mockupsThree,
];

export const HeroMockups = () => {
  return (
    <div className="section-container md:px- relative flex items-end gap-8 overflow-x-auto overflow-y-hidden px-6 md:grid md:grid-cols-3 md:overflow-visible">
      {contentConfig.hero.steps.map((step, index) => {
        return (
          <SpringInView
            key={index}
            delay={index * 100}
            disableOnMobile
            className={`-mb-18 flex max-w-full min-w-60 flex-shrink-0 flex-col items-center overflow-hidden rounded-t-3xl px-8 pt-6 pb-0 md:min-w-0 ${colors[index]}`}
          >
            <div className="mb-6 text-center">
              <div className="text-sm font-black text-gray-950">
                {step.stepNumber}
              </div>
              <h2 className="pb-2 text-3xl font-bold text-gray-950">
                {step.title}
              </h2>
              <p className="text-smaller">{step.subtitle}</p>
            </div>
            <img
              src={images[index]}
              loading="lazy"
              alt=""
              className={`h-60 w-full max-w-full rounded-t-3xl object-cover object-[50%_0%] shadow-2xl ${heights[index]}`}
            />
          </SpringInView>
        );
      })}
    </div>
  );
};
