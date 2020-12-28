import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/shared/country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  countries: Country[];
  constructor(private countryService: CountryService,
              private router: Router) { }

  ngOnInit(): void {
    this.readCountries();
  }

  readCountries(){
    this.countryService.readCountries().subscribe((data: any) =>{
      console.log(data);
      this.countries = data['msg'];
      
    }, error =>{
      console.log(error);
      
    });
  }

  doUpdate(country: Country){
    this.countryService.setter(country);
    this.router.navigate(['/createUpdate']);
  }

  doDelete(country: Country){
    this.countryService.deleteCountry(country._id).subscribe((data:any)=>{
      this.countries.splice(this.countries.indexOf(country), 1);
    }, error=>{
      console.log(error);
      
    })
  }
}
