import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin } from "rxjs";

import { IRegion } from "../components/region/region.model";

@Injectable({
  providedIn: "root",
})
export class RegionsService {
  regs: IRegion[] = [
    {
      id: 2643743,
      name: "London",
      temperature: 286.98,
      weather: "Clouds",
      wind_speed: 2.06,
    },
    {
      id: 1234,
      name: "Teste",
      temperature: 230.08,
      weather: "Sun",
      wind_speed: 1.5,
    },
  ];

  private REGIONS_LOCATIONS = [
    "Curitiba,br",
    "London,uk",
    "England,uk",
    "Porto,pt",
    "Lisboa,pt",
  ];
  private ID_API = "3d8b309701a13f65b660fa2c64cdc517";
  private REGIONS_API = `https://api.openweathermap.org/data/2.5/weather?appid=${this.ID_API}`;
  // https://api.openweathermap.org/data/2.5/weather?appid=${this.ID_API}&q=London,uk
  constructor(private http: HttpClient) {}

  regions(): Observable<any[]> {
    return forkJoin([
      this.http.get(`${this.REGIONS_API}&q=Curitiba,br`),
      this.http.get(`${this.REGIONS_API}&q=London,uk`),
      this.http.get(`${this.REGIONS_API}&q=England,uk`),
      this.http.get(`${this.REGIONS_API}&q=Porto,pt`),
      this.http.get(`${this.REGIONS_API}&q=Lisboa,pt`),
    ]);
    // return this.http.get<IRegion[]>(`${this.REGIONS_API}&q=London,uk`);
  }
}
