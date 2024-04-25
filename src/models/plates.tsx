export enum Unit {
  Kilos = "Kilos",
  Pounds = "Pounds",
}

export interface PlateProps {
  unit: Unit;
}

export function Red() {
  return (
    <div className="m-1 h-8 w-72 content-center rounded bg-red-700 text-center text-xl font-bold">
      25
    </div>
  );
}

export function None() {
  return (
    <div className="m-1 h-8 w-72 content-center rounded text-center text-xl font-bold" />
  );
}

export function Blue(props: PlateProps) {
  return (
    <div className="m-1 h-8 w-72 content-center rounded bg-blue-700 text-center text-xl font-bold">
      {props.unit === Unit.Kilos ? 20 : 45}
    </div>
  );
}

export function Yellow() {
  return (
    <div className="m-1 h-8 w-72 content-center rounded bg-yellow-400 text-center text-xl font-bold">
      15
    </div>
  );
}

export function Green(props: PlateProps) {
  return (
    <div className="m-1 h-8 w-72 content-center rounded bg-green-700 text-center text-xl font-bold">
      {props.unit === Unit.Kilos ? 10 : 25}
    </div>
  );
}

export function White(props: PlateProps) {
  return (
    <div className="m-1 h-8 w-72 content-center rounded bg-neutral-50 text-center text-xl font-bold">
      {props.unit === Unit.Kilos ? 5 : 10}
    </div>
  );
}

export function Black(props: PlateProps) {
  return (
    <div className="m-1 h-8 w-72 content-center rounded bg-neutral-950 text-center text-xl font-bold text-white">
      {props.unit === Unit.Kilos ? 2.5 : 5}
    </div>
  );
}

export function Silver(props: PlateProps) {
  return (
    <div className="m-1 h-8 w-72 content-center rounded bg-gray-400 text-center text-xl font-bold">
      {props.unit === Unit.Kilos ? 1.25 : 2.5}
    </div>
  );
}
