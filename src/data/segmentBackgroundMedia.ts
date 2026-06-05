/**
 * Mídias de fundo por segmento.
 * WebM é leve no Chrome/Firefox; Safari (incl. iOS) não reproduz WebM — use MP4 H.264 como fallback.
 */
export const segmentBackgroundMedia = {
  software: {
    poster:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    sources: [
      { src: "/dev_write.webm", type: "video/webm" as const },
      {
        src: "/dev_write.mp4",
        type: "video/mp4" as const,
      },
    ],
  },
  design: {
    poster:
      "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1600",
    sources: [
      { src: "/colored_green_smoke.webm", type: "video/webm" as const },
      {
        src: "/colored_green_smoke.mp4",
        type: "video/mp4" as const,
      },
    ],
  },
} as const;
