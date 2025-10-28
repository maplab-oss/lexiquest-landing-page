import { contentConfig } from "./content-config";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-green-400">
      {/* Main Footer Content */}
      <div className="section-container text-smaller flex flex-col justify-between gap-8 py-12 md:flex-row">
        <a className="inter" href={contentConfig.footer.credits.url}>
          {contentConfig.footer.credits.text}
        </a>
        <div className="flex flex-col gap-3 md:flex-row">
          {contentConfig.footer.links.map(({ text, url }) => (
            <a className="inter" key={url} href={url}>
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
