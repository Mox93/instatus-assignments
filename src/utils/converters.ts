export function toInt(val: string | null | undefined, fallback?: number) {
  if (!val) return fallback ?? NaN;

  const result = parseInt(val);

  return isNaN(result) ? fallback ?? NaN : result;
}
