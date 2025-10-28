import { SpringInView } from "./SpringInView";
import { StartButton } from "./StartButton";
import { contentConfig } from "./content-config";

export const InfoSectionTwo = () => {
  return (
    <section className="bg-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Feature Mockup */}
          <SpringInView className="relative max-w-[375px] transform lg:order-2 lg:max-w-[500px]">
            <div className="shadow-3xl relative flex flex-col items-center overflow-hidden rounded-3xl rounded-br-none bg-purple-50 p-8 pb-0">
              <img
                src={contentConfig.assets.mockups.heroSectionTwo}
                loading="lazy"
                alt="Conversation practice mockup"
                className="max-h-96 w-full rounded-t-3xl object-cover object-top"
              />
            </div>
            <div className="absolute -top-[5%] -left-[5%] max-w-[60%] rounded-3xl rounded-bl-none bg-purple-400 p-5 lg:p-8">
              <div className="flex w-full flex-col space-y-3">
                {contentConfig.infoSectionTwo.checklist.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2.5">
                    <div className="mt-3">
                      <svg
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.6704 0.432546C14.8815 0.637737 15 0.915999 15 1.20614C15 1.49628 14.8815 1.77454 14.6704 1.97973L6.23359 10.1811C6.1221 10.2895 5.98973 10.3755 5.84404 10.4341C5.69835 10.4928 5.5422 10.523 5.38451 10.523C5.22681 10.523 5.07066 10.4928 4.92497 10.4341C4.77928 10.3755 4.64691 10.2895 4.53542 10.1811L0.343636 6.10702C0.236129 6.00609 0.150377 5.88535 0.091385 5.75185C0.0323927 5.61836 0.00134125 5.47478 4.24993e-05 5.32949C-0.00125625 5.18421 0.0272238 5.04012 0.0838206 4.90565C0.140417 4.77118 0.223998 4.64901 0.329684 4.54627C0.435371 4.44354 0.561048 4.36229 0.699382 4.30727C0.837715 4.25226 0.985936 4.22457 1.13539 4.22583C1.28485 4.2271 1.43255 4.25728 1.56988 4.31463C1.70721 4.37197 1.83142 4.45533 1.93525 4.55984L5.38413 7.91244L13.0781 0.432546C13.1826 0.330866 13.3067 0.250206 13.4433 0.195174C13.5799 0.140142 13.7264 0.111816 13.8743 0.111816C14.0221 0.111816 14.1686 0.140142 14.3052 0.195174C14.4418 0.250206 14.5659 0.330866 14.6704 0.432546Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="garamond text-2xl text-gray-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SpringInView>

          {/* Content */}
          <div className="lg:order-1">
            <SpringInView>
              <h2 className="heading-l2">
                {contentConfig.infoSectionTwo.title}
              </h2>
            </SpringInView>

            {contentConfig.infoSectionTwo.features.map((feature, index) => (
              <SpringInView key={index} className="mb-5">
                <h3 className="heading-l3">{feature.title}</h3>
                <p className="text-normal">{feature.description}</p>
              </SpringInView>
            ))}

            <SpringInView className="mt-10">
              <StartButton />
            </SpringInView>
          </div>
        </div>
      </div>
    </section>
  );
};
