import Head from "next/head";
import { useState } from "react";
import getPlates, { convertWeight, getRoundedWeight } from "~/core/plates";
import { Unit } from "~/models/plates";

export default function Home() {
  const [unit, setUnit] = useState(Unit.Pounds);
  const [weight, setWeight] = useState(0);
  const [plates, setPlates] = useState([<></>]);

  const [pounds, setPounds] = useState(0);
  const [kilos, setKilos] = useState(0);

  const [count, setCount] = useState(0);

  // TODO: mobile styling (can do larger text, looks fine on mobile)
  // TODO: break out into separate components
  return (
    <div className="flex h-svh min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Barbell Math Calculator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-12 w-full content-center bg-zinc-900 text-center text-xl font-bold text-white">
        Barbell Calculator
      </div>

      <main className="flex h-full w-full flex-col items-center bg-zinc-800 py-8">
        <div className="flex flex-row items-center gap-2 pb-8 text-xl">
          <input
            type="text"
            placeholder="lbs"
            value={pounds !== 0 ? pounds.toString() : ""}
            onCopy={(_e) => setUnit(Unit.Pounds)}
            onChange={(e) => {
              setPounds(Number(e.target.value));
              setKilos(
                Number(
                  convertWeight(Number(e.target.value), Unit.Pounds).toFixed(2),
                ),
              );
            }}
            className="h-12 w-32 rounded bg-zinc-700 text-center text-white"
          />
          <div className="font-bold text-white">{"<>"}</div>
          <input
            type="text"
            placeholder="kg"
            value={kilos !== 0 ? kilos.toString() : ""}
            onCopy={(_e) => setUnit(Unit.Kilos)}
            onChange={(e) => {
              setKilos(Number(e.target.value));
              setPounds(
                Number(
                  convertWeight(Number(e.target.value), Unit.Kilos).toFixed(2),
                ),
              );
            }}
            className="h-12 w-32 rounded bg-zinc-700 text-center text-xl text-white"
          />
          <button
            onClick={() => {
              setKilos(0);
              setPounds(0);
            }}
            className="h-8 rounded px-2 py-1 text-xl font-bold text-white"
          >
            ↺
          </button>
        </div>

        <div className="flex flex-row gap-4 pb-6">
          <input
            type="number"
            className="h-12 w-52 rounded bg-zinc-700 text-center text-2xl text-white"
            placeholder={`${unit.toLowerCase()}`}
            value={weight.toString()}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <button
            className="w-16 rounded bg-purple-400 px-2 py-1 text-xl text-white"
            onClick={() => {
              setUnit(unit === Unit.Kilos ? Unit.Pounds : Unit.Kilos);
              setPlates([<></>]);
            }}
          >
            {unit === Unit.Kilos ? "kg" : "lbs"}
          </button>
        </div>

        <div className="flex flex-row gap-4 pb-8">
          <button
            className="rounded bg-violet-400 px-6 py-2 text-xl text-white"
            type="submit"
            onClick={() => {
              setWeight(getRoundedWeight(weight, unit));
              setPlates(getPlates(weight, unit));
            }}
          >
            Calculate
          </button>
          <button
            className="rounded bg-blue-400 px-4 py-2 text-xl text-white"
            type="submit"
            onClick={() => {
              setWeight(0);
              setPlates([<></>]);
            }}
          >
            Reset
          </button>
        </div>

        <div className="flex h-72 grow flex-col items-center gap-1 pb-8">
          {plates.map((plate) => {
            return <div key={crypto.randomUUID()}>{plate}</div>;
          })}
        </div>

        <div className="flex w-full flex-row items-center justify-between px-16 pb-32 font-mono text-5xl text-white">
          <span className="text-2xl">Sets:</span>
          <span className="font-bold">{count}</span>
          <div className="flex flex-row items-center gap-1 font-mono text-lg">
            <button
              className="rounded bg-zinc-700 px-4 py-2 text-white"
              onClick={() => count > 0 && setCount(count - 1)}
            >
              -
            </button>
            <button
              className="rounded bg-zinc-700 px-4 py-2 text-white"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
