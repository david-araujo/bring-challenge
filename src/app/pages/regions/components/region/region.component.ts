import { Component, OnInit, Input } from "@angular/core";
import { IRegion } from "./region.model";

@Component({
  selector: "brg-region",
  templateUrl: "./region.component.html",
  styleUrls: ["./region.component.scss"],
})
export class RegionComponent implements OnInit {
  @Input()
  region!: IRegion;

  constructor() {}

  ngOnInit(): void {}
}
