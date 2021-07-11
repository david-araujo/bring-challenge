import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin } from "rxjs";

import { IRegion } from "../components/region/region.model";

@Injectable({
  providedIn: "root",
})
export class RegionsService {
  private ID_API = "3d8b309701a13f65b660fa2c64cdc517";
  private REGIONS_API = `https://api.openweathermap.org/data/2.5/weather?appid=${this.ID_API}`;

  constructor(private http: HttpClient) {}

  regions(): Observable<any[]> {
    return forkJoin([
      this.http.get(`${this.REGIONS_API}&q=Curitiba,br`),
      this.http.get(`${this.REGIONS_API}&q=London,uk`),
      this.http.get(`${this.REGIONS_API}&q=England,uk`),
      this.http.get(`${this.REGIONS_API}&q=Porto,pt`),
      this.http.get(`${this.REGIONS_API}&q=Lisboa,pt`),
    ]);
  }
}
