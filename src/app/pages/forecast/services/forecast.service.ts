import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ForecastService {
  private REGIONS_LOCATIONS = [
    { name: "Curitiba", country_code: "br" },
    { name: "London", country_code: "uk" },
    { name: "England", country_code: "uk" },
    { name: "Porto", country_code: "pt" },
    { name: "Lisboa", country_code: "pt" },
  ];

  private ID_API = "3d8b309701a13f65b660fa2c64cdc517";
  private FORECAST_API = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.ID_API}`;

  constructor(private http: HttpClient) {}

  forecasts(name: string): Observable<any[]> {
    const region_location = this.REGIONS_LOCATIONS.find(
      (el) => el.name === name
    );
    return this.http.get<any[]>(
      `${this.FORECAST_API}&q=${region_location?.name},${region_location?.country_code}`
    );
  }
}
