import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Team } from "../../models/Team";
import { TeamService } from "../../services/team.service";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.component.html",
  styleUrls: ["./team-detail.component.scss"] 
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;

  carouselOptions = {
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      }
    },
    loop: true,
    margin: 10,
    dots: true,
    navigation: false,
    video: true
  };

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.teamService.getTeam(id).subscribe(teams => {
      this.team = teams[0];
    });
  }

  goBack(): void {
    this.location.back();
  }

  isVideo(image: string): boolean {
    return image.indexOf('youtube') != -1;
  }
}
