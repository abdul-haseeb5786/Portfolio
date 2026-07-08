"use client";

interface StarsProps {
  rating?: number;
  size?: number;
}

export default function Stars({ rating = 5, size = 14 }: StarsProps) {
  return (
    <span className="editorial-review-rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="editorial-star"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 2 L14.9 8.6 L22 9.3 L16.6 14 L18.2 21 L12 17.3 L5.8 21 L7.4 14 L2 9.3 L9.1 8.6 Z"
            fill={i <= Math.round(rating) ? "var(--accent)" : "none"}
            stroke={
              i <= Math.round(rating) ? "var(--accent)" : "var(--muted)"
            }
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      ))}
      <span className="editorial-rating-num">{Number(rating).toFixed(1)}/5</span>
    </span>
  );
}
