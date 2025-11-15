import CurrencyRates from "../models/currency";

export const RatesCurrenciesAdapter = (currencyRates: CurrencyRates[]) =>
  currencyRates.map((rate) => ({
    ...rate,
    owner: "Sensei OHS",
  }));
