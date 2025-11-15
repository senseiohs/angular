export default interface CurrencyRates {
  result: string;
  base_code: string;
  rates: { [key: string]: number };
}
