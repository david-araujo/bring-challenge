import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegionsComponent } from "./pages/regions/regions.component";
import { ForecastComponent } from "./pages/forecast/forecast.component";

const routes: Routes = [
  {
    path: "",
    component: RegionsComponent,
  },
  {
    path: "forecast/:name",
    component: ForecastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
