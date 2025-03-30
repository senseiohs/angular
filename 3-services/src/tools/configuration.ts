import { InjectionToken } from "@angular/core";

export interface AppConfig {
  apiUrl: string;
  apiKey: string;
  cacheSize: number;
}

export const APP_CONFIG: AppConfig = {
  apiUrl: "https://api.example.com",
  apiKey: "1234567890abcdef",
  cacheSize: 100,
};

//Token para la inyección de dependencias
export const CONFIG_TOKEN = new InjectionToken<AppConfig>("CONFIG_TOKEN", {
  providedIn: "root",
  factory: () => APP_CONFIG,
});
