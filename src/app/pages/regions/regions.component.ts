import { Component, OnInit } from "@angular/core";
import { IRegion } from "./components/region/region.model";
import { RegionsService } from "./services/regions.service";

@Component({
  selector: "brg-regions",
  templateUrl: "./regions.component.html",
  styleUrls: ["./regions.component.scss"],
})
export class RegionsComponent implements OnInit {
  regions!: IRegion[];
  constructor(private regionsService: RegionsService) {}

  ngOnInit(): void {
    this.regionsService.regions().subscribe((regions) => {
      this.regions = regions.map((region) => ({
        id: region.id,
        name: region.name,
        weather: region.weather[0].main,
        temperature: region.main.temp,
        wind_speed: region.wind.speed,
      }));
    });
  }
}
