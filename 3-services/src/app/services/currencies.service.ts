import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import CurrencyRates from "../models/currency";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RatesCurrenciesAdapter } from "../adapters/rates-currencies-adapter";

@Injectable({
  providedIn: "root",
})
export class CurrenciesService {
  private readonly apiUrl = "https://open.er-api.com/v6/latest";
  private readonly http = inject(HttpClient);

  getCurrencyRates(baseCode: string): Observable<CurrencyRates> {
    return this.http.get<CurrencyRates>(`${this.apiUrl}/${baseCode}`);
  }

  updateCurrencyRates(currency: CurrencyRates): Observable<CurrencyRates> {
    return this.http.put<CurrencyRates>(`${this.apiUrl}`, currency);
  }

  deleteCurrencyRates(code: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${code}`);
  }

  listAllCurrencies(): Observable<CurrencyRates[]> {
    return this.http
      .get<CurrencyRates[]>(`${this.apiUrl}/all`)
      .pipe(map((rates) => RatesCurrenciesAdapter(rates)));
  }
}
