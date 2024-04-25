import {
  Black,
  Blue,
  Green,
  None,
  type PlateProps,
  Red,
  Silver,
  Unit,
  White,
  Yellow,
} from "~/models/plates";

const KILO_INCREMENT = 2.5;
const POUNDS_INCREMENT = 5;

export default function getPlates(weight: number, unit: Unit) {
  if (unit === Unit.Kilos) {
    if (weight <= 20) {
      return [None()];
    }

    return getKiloPlates(getRoundedWeight(weight, unit));
  }

  if (weight <= 45) {
    return [None()];
  }

  return getPoundPlates(getRoundedWeight(weight, unit));
}

function getRoundedWeight(weight: number, unit: Unit) {
  if (unit === Unit.Kilos) {
    return Math.ceil(weight / KILO_INCREMENT) * KILO_INCREMENT - 20;
  }

  return Math.ceil(weight / POUNDS_INCREMENT) * POUNDS_INCREMENT - 45;
}

function getPoundPlates(weight: number) {
  const plates = [];

  const poundPlateProps: PlateProps = {
    unit: Unit.Pounds,
  };

  while (weight > 0) {
    if (weight - 45 * 2 >= 0) {
      plates.unshift(Blue(poundPlateProps));
      weight = weight - 45 * 2;
      continue;
    }

    if (weight - 25 * 2 >= 0) {
      plates.unshift(Green(poundPlateProps));
      weight = weight - 25 * 2;
      continue;
    }

    if (weight - 10 * 2 >= 0) {
      plates.unshift(White(poundPlateProps));
      weight = weight - 10 * 2;
      continue;
    }

    if (weight - 5 * 2 >= 0) {
      plates.unshift(Black(poundPlateProps));
      weight = weight - 5 * 2;
      continue;
    }

    if (weight - 2.5 * 2 >= 0) {
      plates.unshift(Silver(poundPlateProps));
      weight = weight - 2.5 * 2;
      continue;
    }
  }

  return plates;
}

function getKiloPlates(weight: number) {
  const plates = [];

  const kiloPlateProps: PlateProps = {
    unit: Unit.Kilos,
  };

  while (weight > 0) {
    if (weight - 25 * 2 >= 0) {
      plates.unshift(Red());
      weight = weight - 25 * 2;
      continue;
    }

    if (weight - 20 * 2 >= 0) {
      plates.unshift(Blue(kiloPlateProps));
      weight = weight - 20 * 2;
      continue;
    }

    if (weight - 15 * 2 >= 0) {
      plates.unshift(Yellow());
      weight = weight - 15 * 2;
      continue;
    }

    if (weight - 10 * 2 >= 0) {
      plates.unshift(Green(kiloPlateProps));
      weight = weight - 10 * 2;
      continue;
    }

    if (weight - 5 * 2 >= 0) {
      plates.unshift(White(kiloPlateProps));
      weight = weight - 5 * 2;
      continue;
    }

    if (weight - 2.5 * 2 >= 0) {
      plates.unshift(Black(kiloPlateProps));
      weight = weight - 2.5 * 2;
      continue;
    }

    if (weight - 1.25 * 2 >= 0) {
      plates.unshift(Silver(kiloPlateProps));
      weight = weight - 2.5 * 2;
      continue;
    }
  }

  return plates;
}
