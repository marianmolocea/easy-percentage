import Head from 'next/head';
import { useState } from 'react';

import Input from '../components/Input';
import {
    calculateXIncreaseDecreaseBy, calculateXIsPercentOf, calculateXofYPercent, calculateXPercentOf
} from '../utils/calculatePercent';

type ChangeValuesType = {
  value: number | undefined
  row: string
  valueType: 'x' | 'y'
  side?: number
}

type RowValesType = {
  x: undefined | number
  y: undefined | number
  res: '-' | number
  side?: number
}

const initialState: Record<string, RowValesType> = {
  row1: { x: undefined, y: undefined, res: '-' },
  row2: { x: undefined, y: undefined, res: '-' },
  row3: { x: undefined, y: undefined, res: '-' },
  row4: { x: undefined, y: undefined, res: '-' },
}

export default function Home() {
  const [values, setValues] = useState(initialState)
  const [isIncrease, setIsIncrease] = useState(true)

  const handleChangeValues = ({ value, row, valueType }: ChangeValuesType) => {
    let res: number | '-' = '-'
    const { x, y } = values[row]
    const xValue = valueType === 'x' ? value : x
    const yValue = valueType === 'y' ? value : y
    if (xValue !== undefined && yValue !== undefined) {
      switch (row) {
        case 'row1':
          res = calculateXPercentOf({ x: xValue, y: yValue })
          break
        case 'row2':
          res = calculateXofYPercent({ x: xValue, y: yValue })
          break
        case 'row3':
          res = calculateXIsPercentOf({ x: xValue, y: yValue })
          break
        case 'row4':
          res = calculateXIncreaseDecreaseBy({
            x: xValue,
            y: yValue,
            isIncrease: isIncrease,
          })
          break

        default:
          break
      }
    }
    const newValues = {
      ...values,
      [row]: { ...values[row], [valueType]: value, res },
    }

    setValues(newValues)
  }

  return (
    <div className="flex flex-col bg-gray-100 text-slate-700 md:items-center md:justify-center">
      <Head>
        <title>
          Easy Percentage Calculator | Free Online Percentage Calulator
        </title>
        <meta
          name="description"
          content="Easy Percentage Calculator is a free and easy to use online tool that will help you calculate the percentage of a value. Calculate the amount of discount you want to apply or how much a price has increased easily in a few steps. "
        />
        <link rel="icon" href="/percentage.svg" />
        <meta name="keywords" content="percentage calculator" />
        <meta name="x-ua-compatible" content="ie=edge" />
        <meta
          name="apple-mobile-web-app-title"
          content="Easy Percentage Calculator"
        />
        <meta name="application-name" content="Easy Percentage Calculator" />
      </Head>

      <main className=" min-h-screen max-w-xl px-4 pt-4 ">
        <header>
          <h1 className="text-2xl font-bold md:px-4 md:text-4xl">
            Percentage Calculator
          </h1>
          <p className=" text-s p-1 md:px-4 md:text-base">
            Easy percentage calculator. Get your percent right with our free
            online tool.
          </p>
        </header>
        <section className="my-4 flex max-w-lg flex-col flex-wrap divide-y divide-gray-200 rounded-md bg-white p-4 drop-shadow-md md:m-4">
          <div className="row-container">
            <div className="inputs-container">
              <div className="mr-4">What is</div>
              <Input
                value={values.row1.x}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row1', valueType: 'x' })
                }
                placeholder="4"
              />
              <div className="mr-4">% of</div>
              <Input
                value={values.row1.y}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row1', valueType: 'y' })
                }
                placeholder="20"
              />
            </div>
            <strong className="result">{values.row1.res}</strong>
          </div>

          <div className="row-container">
            <div className="inputs-container ">
              <Input
                value={values.row2.x}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row2', valueType: 'x' })
                }
                placeholder="25"
              />
              <div className="mr-4">is what % of</div>
              <Input
                value={values.row2.y}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row2', valueType: 'y' })
                }
                placeholder="100"
              />
              <div className="mr-4">?</div>
            </div>
            <strong className="result">{values.row2.res}</strong>
          </div>

          <div className="row-container">
            <div className="inputs-container">
              <Input
                value={values.row3.x}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row3', valueType: 'x' })
                }
                placeholder="25"
              />
              <div className="mr-4">is</div>
              <Input
                value={values.row3.y}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row3', valueType: 'y' })
                }
                placeholder="100"
              />
              <div className="mr-4">% of what?</div>
            </div>
            <strong className="result">{values.row3.res}</strong>
          </div>

          <div className="row-container">
            <div className="inputs-container">
              <Input
                value={values.row4.x}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row4', valueType: 'x' })
                }
                placeholder="80"
              />
              <div className="flex">
                <div
                  className={`toggle-button  ${
                    isIncrease ? 'direction-up' : 'direction-down'
                  }`}
                >
                  <button
                    className={
                      isIncrease ? 'toggle-button-up' : 'toggle-button-down'
                    }
                    onClick={() => setIsIncrease(!isIncrease)}
                  >
                    {isIncrease ? 'increased' : 'decreased'}
                  </button>
                  {isIncrease ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  )}{' '}
                </div>
                by
              </div>
              <Input
                value={values.row4.y}
                onChange={(value: number | undefined) =>
                  handleChangeValues({ value, row: 'row4', valueType: 'y' })
                }
                placeholder="25"
              />
              <div className="mr-4">% is</div>
            </div>
            <strong className="result">{values.row4.res}</strong>
          </div>
        </section>
        <footer className="px-4 text-xs">Copyright © 2022 Mario Molocea</footer>
      </main>
    </div>
  )
}
