import { cx } from "./cx";
import { contentConfig } from "./content-config";

export const StartButton = ({ slim }: { slim?: boolean }) => (
  <a
    href="#download-links"
    className={cx(
      "garamond text-medium mr-3 items-center rounded-full bg-red-500 px-8 py-3 text-2xl font-medium text-gray-950 transition-all duration-300 hover:bg-gray-800 hover:text-white md:mr-0 md:inline-flex",
      slim && "px-6 py-2 text-lg",
    )}
  >
    {contentConfig.cta.startFree}
  </a>
);
