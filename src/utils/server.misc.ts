export function toInt(val: string | null | undefined, fallback?: number) {
  if (!val) return fallback ?? NaN;

  const result = parseInt(val);

  return isNaN(result) ? fallback ?? NaN : result;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function makeId({ size = 12, prefix = "" } = {}) {
  let ID = prefix;
  for (let i = 0; i < size; i++) {
    ID += CHARACTERS.charAt(Math.round(Math.random() * CHARACTERS.length));
  }
  return ID;
}
