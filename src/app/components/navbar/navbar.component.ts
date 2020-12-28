import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/shared/country.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private countryService: CountryService) { }

  ngOnInit(): void {
  }

  newCountry(event: any){
    event.preventDefault();
    this.countryService.setter(new Country());
    this.router.navigate(['/createUpdate']);
  }

}
