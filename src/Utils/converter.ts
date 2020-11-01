import dictionary from "./dictionary.json";
interface DIC {
  [key: number]: any;
}
interface MapNum {
  [key: string]: number;
}

const dic = dictionary as DIC;
const arabDigit: MapNum = {
  "٠": 0,
  "١": 1,
  "٢": 2,
  "٣": 3,
  "٤": 4,
  "٥": 5,
  "٦": 6,
  "٧": 7,
  "٨": 8,
  "٩": 9,
};
export function numConverter(num: string) {
  if (num === "") return "";
  const digits = num.split("").reverse();

  let tdp: string = "";
  let phrase: string[] = [];
  for (let i = 1; i <= digits.length; i++) {
    const dg = arabDigit[digits[i - 1]];
    if (dg === undefined) return "";

    const r = i % 3;
    switch (r) {
      case 0:
        // third digit
        tdp = `${dic[dg]} ${dic[100]} and ${tdp}`;
        phrase.push(tdp);
        tdp = "";
        break;
      case 1:
        // first digit
        tdp = dic[dg];
        break;
      case 2:
        // second digit
        tdp = dic[dg * 10] + `-${tdp}`;
        break;

      default:
        break;
    }
  }
  if (tdp) phrase.push(tdp);
  if (phrase.length > 3) return "out of range";
  return phrase.reduce((fullPhrase, val, i) => {
    const t = 1000 ** i;
    return t > 1 ? `${val} ${dic[t]} ${fullPhrase}` : val;
  });
}
