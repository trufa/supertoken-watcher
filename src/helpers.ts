import Identicon from 'identicon.js';

export const getIdenticonData = (hash: string): string => {
  return new Identicon(hash, 20).toString();
};

const splitDecimalNumber = (num: any) => {
  let sign = "";
  if (typeof(num) == "number") {
    // to avoid scientific notion (e-) of Number.toString()
    // > 0.00000001.toString()
    // '1e-8'
    num = num.toFixed(50);
  }
  if (num.startsWith("-")) {
    sign = "-";
    num = num.slice(1);
  }
  const [whole = "", dec = ""] = num.toString().split(".");
  return [
    sign,
    whole.replace(/^0*/, ""), // trim leading zeroes
    dec.replace(/0*$/, ""), // trim trailing zeroes
  ];
}

const fromDecimals = (num: string, decimals: number, { truncate = true } = {}) => {
  const [sign, whole, dec] = splitDecimalNumber(num);
  if (!whole && !dec) {
    return "0";
  }

  const paddedWhole = whole.padStart(decimals + 1, "0");
  const decimalIndex = paddedWhole.length - decimals;
  const wholeWithoutBase = paddedWhole.slice(0, decimalIndex);
  const decWithoutBase = paddedWhole.slice(decimalIndex);

  if (!truncate && dec) {
    // We need to keep all the zeroes in this case
    return `${sign}${wholeWithoutBase}.${decWithoutBase}${dec}`;
  }

  // Trim any trailing zeroes from the new decimals
  const decWithoutBaseTrimmed = decWithoutBase.replace(/0*$/, "");
  if (decWithoutBaseTrimmed) {
    return `${sign}${wholeWithoutBase}.${decWithoutBaseTrimmed}`;
  } else {
    return sign + wholeWithoutBase;
  }
}

export const wad4human = (wad: string, decimals = 5) => {
  return Number(fromDecimals(wad.toString(), 18)).toFixed(decimals);
}
