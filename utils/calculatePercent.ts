import parseNumber from './parseNumber';

export enum Sides {
  Increase = 1,
  Decrease = -1,
}
type PropsType = {
  x: number | undefined
  y: number | undefined
  isIncrease?: boolean
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

export function calculateXofYPercent({ x, y }: PropsType) {
  if (x !== undefined && y) {
    return parseNumber((x * 100) / y)
  } else {
    return '-'
  }
}

export function calculateXIsPercentOf({ x, y: percent }: PropsType) {
  if (x !== undefined && percent) {
    return parseNumber((x * 100) / percent)
  } else {
    return '-'
  }
}

export function calculateXIncreaseDecreaseBy({
  x,
  y: percent,
  isIncrease,
}: PropsType) {
  if (x !== undefined && percent !== undefined) {
    const multiplicator = isIncrease ? 1 : -1
    return parseNumber(multiplicator * x * ((percent + 100) / 100))
  } else {
    return '-'
  }
}
