import type { ReactNode } from "react";

type PortfolioBrowserFrameProps = {
  url?: string;
  children: ReactNode;
  className?: string;
};

export function PortfolioBrowserFrame({
  url,
  children,
  className = "",
}: PortfolioBrowserFrameProps) {
  const displayUrl = url
    ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
    : "visiontaubate.com.br";

  return (
    <div
      className={`overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900 shadow-lg ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-950 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="min-w-0 flex-1 rounded-md bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400 truncate">
          {displayUrl}
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        {children}
      </div>
    </div>
  );
}
