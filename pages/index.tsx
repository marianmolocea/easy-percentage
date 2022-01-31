import Head from 'next/head';
import { useState } from 'react';

import Input from '../components/Input';
import { calculateXPercentOf } from '../utils/calculatePercent';

type ChangeValuesType = {
  value: number
  row: string
  valueType: 'x' | 'y'
}

type RowValesType = {
  x: undefined | number
  y: undefined | number
  res: '-' | number
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
          break
        case 'row3':
          break
        case 'row4':
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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Easy Percentage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center bg-gray-100 px-20 text-center">
        <header>
          <h1 className="text-6xl font-bold">Percentage Calculator</h1>
          <p>
            Easy percentage calculator. Get your percent right with our free
            online tool.
          </p>
        </header>
        <section className="m-4 divide-y divide-blue-200 rounded-md bg-blue-100 p-4 drop-shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center py-4">
              <div className="mr-4">What is</div>
              <Input
                value={values.row1.x}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row1', valueType: 'x' })
                }
                placeholder="4"
                type="percentage"
              />
              <div className="mr-4">% of</div>
              <Input
                value={values.row1.y}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row1', valueType: 'y' })
                }
                placeholder="20"
                type="number"
              />
            </div>
            <strong className="mx-4 justify-end">{values.row1.res}</strong>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center py-4 ">
              <Input
                value={values.row2.x}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row2', valueType: 'x' })
                }
                placeholder="25"
                type="number"
              />
              <div className="mr-4">is what percent of</div>
              <Input
                value={values.row2.y}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row2', valueType: 'y' })
                }
                placeholder="100"
                type="number"
              />
              <div className="mr-4">?</div>
            </div>
            <strong className="mx-4 justify-end">{values.row2.res}</strong>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center py-4">
              <Input
                value={values.row3.x}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row3', valueType: 'x' })
                }
                placeholder="25"
                type="number"
              />
              <div className="mr-4">is</div>
              <Input
                value={values.row3.y}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row3', valueType: 'y' })
                }
                placeholder="100"
                type="number"
              />
              <div className="mr-4">% of what?</div>
            </div>
            <strong className="mx-4 justify-end">{values.row3.res}</strong>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center py-4">
              <Input
                value={values.row4.x}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row4', valueType: 'x' })
                }
                placeholder="80"
                type="number"
              />
              <div className="mr-4">increased/decreased by</div>
              <Input
                value={values.row4.y}
                onChange={(value: number) =>
                  handleChangeValues({ value, row: 'row4', valueType: 'y' })
                }
                placeholder="25"
                type="number"
              />
              <div className="mr-4">% is</div>
            </div>
            <strong className="mx-4 justify-end">{values.row4.res}</strong>
          </div>
        </section>
      </main>
    </div>
  )
}
