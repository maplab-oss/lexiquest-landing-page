import { SpringInView } from "./SpringInView";
import { UserRating } from "./UserRating";
import { contentConfig } from "./content-config";

export const HeroText = () => {
  return (
    <section className="-mb-0 pt-20 md:pt-24 lg:-mb-30">
      <SpringInView className="section-container relative">
        <div className="max-w-full transform transition-transform duration-300 lg:max-w-[75%]">
          <h1 className="mb-6 text-5xl leading-16 font-bold text-white md:text-6xl md:leading-20 lg:text-7xl lg:leading-22">
            A <span className="text-green-500">universe</span> of language
            learning
          </h1>
          <p className="text-normal lod mb-8 md:pr-40">
            {contentConfig.hero.subtitle}
          </p>
          <div className="mb-10 md:mb-0">
            <UserRating
              rating={contentConfig.brand.rating}
              totalReviews={contentConfig.brand.totalReviews}
              layout="row"
            />
          </div>
        </div>
      </SpringInView>
    </section>
  );
};
