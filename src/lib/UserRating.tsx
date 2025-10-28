import { contentConfig } from "./content-config";

interface Props {
  rating?: number;
  totalReviews?: number;
  layout?: "row" | "column";
  starColor?: string;
}

const StarIcon = ({ color = "#ef9e11" }: { color?: string }) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.55696 13.7024L12.707 16.2124C13.467 16.6724 14.397 15.9924 14.197 15.1324L13.097 10.4124L16.767 7.23238C17.437 6.65238 17.077 5.55238 16.197 5.48238L11.367 5.07238L9.47696 0.612383C9.13696 -0.197617 7.97696 -0.197617 7.63696 0.612383L5.74696 5.06238L0.916957 5.47238C0.0369575 5.54238 -0.323043 6.64238 0.346957 7.22238L4.01696 10.4024L2.91696 15.1224C2.71696 15.9824 3.64696 16.6624 4.40696 16.2024L8.55696 13.7024Z"
      fill={color}
    />
  </svg>
);

const HalfStarIcon = ({ color = "#ef9e11" }: { color?: string }) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6626 5.4775L11.8226 5.0575L9.93262 0.6075C9.59262 -0.2025 8.43262 -0.2025 8.09262 0.6075L6.20261 5.0675L1.37262 5.4775C0.492615 5.5475 0.132615 6.6475 0.802615 7.2275L4.47262 10.4075L3.37262 15.1275C3.17262 15.9875 4.10262 16.6675 4.86262 16.2075L9.01262 13.7075L13.1626 16.2175C13.9226 16.6775 14.8526 15.9975 14.6526 15.1375L13.5526 10.4075L17.2226 7.2275C17.8926 6.6475 17.5426 5.5475 16.6626 5.4775ZM9.01262 11.8375V2.5375L10.7226 6.5775L15.1026 6.9575L11.7826 9.8375L12.7826 14.1175L9.01262 11.8375Z"
      fill={color}
    />
  </svg>
);

export const UserRating = ({
  rating = contentConfig.userRating.defaultRating,
  totalReviews = contentConfig.userRating.defaultReviews,
  layout = "row",
  starColor = "#ef9e11",
}: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const isColumn = layout === "column";

  return (
    <div
      className={`flex ${isColumn ? "flex-col items-center gap-4" : "flex-row items-center justify-start"}`}
    >
      <div className="flex">
        {contentConfig.assets.userPhotos.map((photo, index) => (
          <div key={index} className={`relative ${index > 0 ? "-ml-2" : ""}`}>
            <img
              loading="lazy"
              src={photo}
              alt=""
              className="h-10 w-10 rounded-full border-2 border-gray-950 object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className={`${isColumn ? "flex flex-col items-center" : "ml-4 flex flex-col items-center justify-start"} ${isColumn ? "-ml-5 sm:items-start" : ""}`}
      >
        <div className="flex items-center justify-start">
          <div className="mr-1.5 flex gap-0.5">
            {[...Array(fullStars)].map((_, i) => (
              <div key={i} className="flex">
                <StarIcon color={starColor} />
              </div>
            ))}
            {hasHalfStar && (
              <div className="flex">
                <HalfStarIcon color={starColor} />
              </div>
            )}
          </div>
          <p
            className={`font-rubik mb-0 text-sm ${isColumn ? "font-medium" : "text-gray-200"}`}
          >
            {rating}/5
          </p>
        </div>
        <p
          className={`font-rubik mb-0 text-sm ${isColumn ? "text-gray-400" : "text-gray-200"}`}
        >
          Rated by {totalReviews.toLocaleString()} users
        </p>
      </div>
    </div>
  );
};
