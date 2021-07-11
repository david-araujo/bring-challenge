import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ForecastService } from "./services/forecast.service";

@Component({
  selector: "brg-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.scss"],
})
export class ForecastComponent implements OnInit {
  forecast!: any;
  constructor(
    private forecastService: ForecastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.forecastService
      .forecasts(this.route.snapshot.params["name"])
      .subscribe((forecast) => {
        console.log(forecast);
        this.forecast = forecast;
      });
  }
}
