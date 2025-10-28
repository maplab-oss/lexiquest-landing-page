import { HeroText } from "./HeroText";
import { HeroMockups } from "./HeroMockups";

export const Hero = () => {
  return (
    <>
      <HeroText />
      <HeroMockups />
      <div className="bg-white md:h-36 md:rounded-t-3xl" />
    </>
  );
};
