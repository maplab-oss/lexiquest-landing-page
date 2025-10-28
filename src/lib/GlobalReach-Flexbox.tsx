import { SpringInView } from "./SpringInView";

const Flag = ({ uri }: { uri: string }) => (
  <img
    src={`https://cdn.prod.website-files.com/688316b1ce3841ffc9403242/${uri}.avif`}
    loading="lazy"
    alt=""
    className="h-14 rounded object-contain transition-opacity hover:opacity-80"
  />
);

const Row = ({ flags }: { flags: string[][] }) => (
  <SpringInView className="mb-5 hidden items-stretch gap-4 lg:flex">
    <div className="flex flex-grow flex-col items-center justify-center rounded-2xl rounded-br-none bg-amber-50 px-6">
      <p className="garamond text-slate-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div className="flex w-32 flex-shrink-0 flex-col items-center justify-center rounded-2xl rounded-br-none bg-amber-300">
      <div className="garamond text-3xl leading-tight font-medium text-slate-800">
        50+
      </div>
      <p className="text-sm text-slate-700">languages</p>
    </div>
    <div className="flex flex-shrink-0 flex-col gap-3">
      {flags.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((uri, j) => (
            <Flag key={uri + j} uri={uri} />
          ))}
        </div>
      ))}
    </div>
  </SpringInView>
);

export const GlobalReachFlexbox = () => {
  return (
    <section className="py-12">
      <div className="section-container">
        <h2 className="mb-10 text-2xl leading-tight font-bold text-slate-800 lg:text-4xl">
          When we say global,
          <br />
          we mean global.
        </h2>
        <Row
          flags={[
            [
              "688316b1ce3841ffc94032f6_AC",
              "688316b1ce3841ffc9403304_EC",
              "688316b1ce3841ffc9403309_DM",
              "688316b1ce3841ffc9403308_CK",
              "688316b1ce3841ffc9403307_EG",
            ],
            [
              "688316b1ce3841ffc9403306_CL",
              "688316b1ce3841ffc9403304_EC",
              "688316b1ce3841ffc9403304_EC",
              "688316b1ce3841ffc9403303_DO",
              "688316b1ce3841ffc9403302_DZ",
            ],
          ]}
        />
        <Row
          flags={[
            [
              "688316b1ce3841ffc9403304_EC",
              "688316b1ce3841ffc9403309_DM",
              "688316b1ce3841ffc9403308_CK",
              "688316b1ce3841ffc9403307_EG",
            ],
            [
              "688316b1ce3841ffc9403304_EC",
              "688316b1ce3841ffc9403304_EC",
              "688316b1ce3841ffc9403303_DO",
              "688316b1ce3841ffc9403302_DZ",
            ],
          ]}
        />
        <Row
          flags={[
            [
              "688316b1ce3841ffc9403309_DM",
              "688316b1ce3841ffc9403308_CK",
              "688316b1ce3841ffc9403307_EG",
            ],
            [
              "688316b1ce3841ffc9403304_EC",
              "688316b1ce3841ffc9403303_DO",
              "688316b1ce3841ffc9403302_DZ",
            ],
          ]}
        />

        {/* Mobile Flags - Hidden on Desktop */}
        <div className="mb-5 flex flex-col gap-5 lg:hidden">
          <div className="flex justify-start gap-2.5">
            <div className="h-10 w-16 overflow-hidden rounded">
              <svg
                width="84"
                height="56"
                viewBox="0 0 84 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full object-cover"
              >
                <g clipPath="url(#clip0_0_557)">
                  <path d="M0 0H84V56H0V0Z" fill="#0052B4" />
                  <path
                    d="M72.0632 29.6538C72.0468 36.0725 71.0152 42.9825 62.6643 46.2737C54.2971 42.9825 53.2819 36.0725 53.2655 29.6538H72.0632V29.6538Z"
                    fill="white"
                  />
                  <path
                    d="M71.9813 32.3719C71.5228 38.0865 69.9509 43.4082 62.648 46.2901C55.3778 43.4082 53.724 37.9064 53.331 32.3883"
                    fill="#29DBFF"
                  />
                  <path
                    d="M71.6865 35.0573C71.1626 39.0363 68.952 43.8175 62.6643 46.2901C56.3766 43.8175 54.3953 39.331 53.6421 35.0901"
                    fill="white"
                  />
                  <path
                    d="M71.0971 37.7099C70.1637 40.6082 67.9368 44.1614 62.6971 46.3556C57.4573 44.2924 55.2959 40.8211 54.2807 37.6772"
                    fill="#29DBFF"
                  />
                  <path
                    d="M69.869 40.4281C68.8047 42.2784 66.9708 44.5871 62.6643 46.3064C58.1614 44.4234 56.5404 42.1637 55.4597 40.3953"
                    fill="white"
                  />
                  <path
                    d="M67.5275 43.4082C66.2012 44.5871 65.5626 45.2421 62.6807 46.3392C59.3895 45.0456 58.9801 44.4398 57.8994 43.4737"
                    fill="#29DBFF"
                  />
                  <path
                    d="M62.7626 37.9228C62.7298 37.8901 58.1941 43.7684 58.1941 43.7684C57.8994 43.5556 56.5567 42.2129 56.0164 41.3123L62.7789 33.1088L69.3614 41.2468C68.7228 42.3111 67.4947 43.4737 67.2 43.7029L62.7626 37.9228ZM62.6479 13.9673L58.3088 21.3357H66.9871L62.6479 13.9673Z"
                    fill="#5CC85C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_557">
                    <rect width="84" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* More mobile SVG flags... */}
          </div>
        </div>
      </div>
    </section>
  );
};
