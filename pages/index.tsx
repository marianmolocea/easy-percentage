import Head from 'next/head';

import Input from '../components/Input';

export default function Home() {
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
              <Input placeholder="15.00" type="percentage" />
              <div className="mr-4">% of</div>
              <Input placeholder="100" type="number" />
            </div>
            <strong className="mx-4 justify-end">20</strong>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center py-4 ">
              <Input placeholder="25" type="number" />
              <div className="mr-4">is what percent of</div>
              <Input placeholder="100" type="number" />
              <div className="mr-4">?</div>
            </div>
            <strong className="mx-4 justify-end">20</strong>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center py-4">
              <Input placeholder="25" type="number" />
              <div className="mr-4">is</div>
              <Input placeholder="100" type="number" />
              <div className="mr-4">% of what?</div>
            </div>
            <strong className="mx-4 justify-end">20</strong>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center py-4">
              <Input placeholder="80" type="number" />
              <div className="mr-4">increased/decreased by</div>
              <Input placeholder="25" type="number" />
              <div className="mr-4">% is</div>
            </div>
            <strong className="mx-4 justify-end">100</strong>
          </div>
        </section>
      </main>
    </div>
  )
}
