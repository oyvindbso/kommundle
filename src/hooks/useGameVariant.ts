export type GameVariant = "kommundle" | "slagordle";

// Slagordle is served from /slagord (or slagord.kommundle.no). The query
// parameter keeps it reachable on hosts without path rewriting.
export function getGameVariant(): GameVariant {
  const { pathname, search, hostname } = window.location;

  if (/^\/slagord(le)?(\/|$)/i.test(pathname)) {
    return "slagordle";
  }
  if (new URLSearchParams(search).has("slagord")) {
    return "slagordle";
  }
  if (/^slagord(le)?\./i.test(hostname)) {
    return "slagordle";
  }

  return "kommundle";
}

export function useGameVariant(): GameVariant {
  return getGameVariant();
}
