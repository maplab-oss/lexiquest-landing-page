import { SpringInView } from "./SpringInView";
import { contentConfig } from "./content-config";

interface Props {
  id?: string;
}

export function FeaturesGrid({ id }: Props) {
  return (
    <section id={id} className="bg-white py-12">
      <div className="section-container">
        <div className="animate-in fade-in zoom-in grid grid-cols-1 gap-8 duration-500 md:grid-cols-3 md:gap-[2vw]">
          {contentConfig.features.map((feature, index) => (
            <SpringInView delay={100 * index} key={index} className="text-left">
              <h3 className="heading-l3">{feature.title}</h3>
              <p className="text-normal">{feature.description}</p>
            </SpringInView>
          ))}
        </div>
      </div>
    </section>
  );
}
