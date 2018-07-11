import { Component, OnInit } from "@angular/core";
import { Team } from "../../models/Team";
import { TeamService } from "../../services/team.service";
import { GeocodingService } from "../../services/geocoding.service";
import { Center } from "../../models/Center";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  // Center map. Required.
  center: Center;
  teams: Team[] = [];
  zoom: number = 11;
  city: string = "";
  message: string;
  warning: Boolean;

  constructor(
    private teamService: TeamService,
    private geocodingService: GeocodingService
  ) {}

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
    });

    // default to Rosario
    this.center = {
      lat: -32.9384566,
      lng: -60.6369745
    };

    this.zoom = 12;
  }

  onFormSubmit(address: string): void {
    this.geocodingService
      .codeAddress(address)
      .forEach((results: google.maps.GeocoderResult[]) => {
        let location = results[0].geometry.location;
        if (this.center.lat !== location.lat() && this.center.lng !== location.lng()) {
          // New center object: triggers OnChanges.
          this.center = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
        }
      })
      .then(() => {
        console.log("Geocoding service: completed.");
      })
      .catch((error: google.maps.GeocoderStatus) => {
        if (error === google.maps.GeocoderStatus.ZERO_RESULTS) {
          this.message = "zero results";
          this.warning = true;
        }
      });
  }

  ngOnInit() {
    this.getTeams();
  }
}
