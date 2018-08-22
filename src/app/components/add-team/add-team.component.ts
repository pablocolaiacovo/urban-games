import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { GeocodingService } from '../../services/geocoding.service';
import { Marker } from '../../models/Marker';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  model: Team;
  success: Boolean;
  message: String;

  constructor(
    private teamService: TeamService,
    private router: Router,
    private geocodingService: GeocodingService
  ) { }

  ngOnInit() {
    this.resetTeam();
  }

  onSubmit() {
    const address = this.model.address;
    this.geocodingService
      .codeAddress(address)
      .forEach((results: google.maps.GeocoderResult[]) => {
        let location = results[0].geometry.location;
        let marker = new Marker();
        marker.lat = location.lat();
        marker.lng = location.lng();

        this.model.marker = marker;

        this.teamService.addTeam(this.model).subscribe(team => {
          this.success = team != undefined;
          this.message = this.success ? "Yay!" : "Oh no :(";
        });
      })
      .then(() => {
        this.router.navigate(["/teams"]);
      })
      .catch((error: google.maps.GeocoderStatus) => {
        this.message = "Error geocoding :(";
        this.success = false;
      });
  }

  resetTeam() {
    this.model = new Team();
    this.message = "";
  }
}
