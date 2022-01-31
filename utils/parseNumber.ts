export default function parseNumber(number: number | string): number {
  return +(Math.round(+number * 100) / 100).toFixed(2);
}