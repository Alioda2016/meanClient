import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/shared/country.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  country:Country;
  constructor(private router: Router,
              private countryService: CountryService) { }

  ngOnInit(): void {
    this.country= this.countryService.getter();
    console.log("countryin ng on init: ", this.country);
    
  }

  createOrUpdate(){
    if(this.country._id==undefined){
    this.countryService.createCountry(this.country).subscribe((data:any) =>{
      console.log(data);
      this.router.navigate(['/']);
      
    },error =>{
      console.log(error);
      
    });
    }else{
      this.countryService.updateCountry(this.country).subscribe((data:any) =>{
        console.log(data);
        this.router.navigate(['/']);
        
      },error =>{
        console.log(error);
        
      });
    }
  }
}
