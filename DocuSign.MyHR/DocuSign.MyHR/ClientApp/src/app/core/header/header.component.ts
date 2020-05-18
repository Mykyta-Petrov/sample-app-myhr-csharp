import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/home/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
    window.location.href = "/Account/Logout";
  }
}