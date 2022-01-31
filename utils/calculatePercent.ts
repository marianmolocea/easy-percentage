import parseNumber from './parseNumber';

type PropsType = {
  x: number | undefined
  y: number | undefined
}

export function calculateXPercentOf({
  x: xPercent,
  y: value,
}: PropsType): number | '-' {
  console.log({ xPercent, value })

  if (xPercent !== undefined && value !== undefined) {
    return parseNumber((value * xPercent) / 100)
  } else {
    return '-'
  }
}
