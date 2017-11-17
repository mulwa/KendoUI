import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private countylist:Array<string> = [
    "Machakos",
    "Makueni",
    "Kitui",
    "Kiambu",
    "Nairobi",
    "Kirinyanga",
    "Homabay",
    "Siaya",
    "Nakuru",
    "Migori",
    "Naivasha",
    "Kajiado",
    "Bomet",
    "Marsabit",
    "Mombasa",
    "Kitale",
    "Narok"
  ];
  private category:Array<string> = [
    "Education",
    "General",
    "Music",
    "Christianity"
  ]

  constructor() { }

  ngOnInit() {
  }

}
