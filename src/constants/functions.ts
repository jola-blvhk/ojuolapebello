export const normalizeTitle = (title: string): string => {
  return title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};