import type { TechPortfolioCategory } from "@/data/techPortfolio";
import { techPortfolioCategories } from "@/data/techPortfolio";

type PortfolioCategoryFilterProps = {
  active: TechPortfolioCategory | "all";
  onChange: (category: TechPortfolioCategory | "all") => void;
  counts: Record<TechPortfolioCategory | "all", number>;
};

export function PortfolioCategoryFilter({
  active,
  onChange,
  counts,
}: PortfolioCategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {techPortfolioCategories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            active === category.id
              ? "border-vision-tech bg-vision-tech/15 text-vision-tech"
              : "border-zinc-700 text-zinc-400 hover:border-vision-tech/40 hover:text-white"
          }`}
        >
          {category.label}
          <span
            className={`rounded-full px-1.5 py-0.5 text-xs ${
              active === category.id
                ? "bg-vision-tech/20 text-vision-tech"
                : "bg-zinc-800 text-zinc-500"
            }`}
          >
            {counts[category.id]}
          </span>
        </button>
      ))}
    </div>
  );
}
