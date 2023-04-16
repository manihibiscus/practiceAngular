import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../countryService.service';
import { Country } from './country';
import { City } from './city';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryServiceService],
})
export class CountryComponent implements OnInit {

  countries?: Country[];
  selectedCountry?: Country;
  cities?: City[];

  value:any=''
  constructor(private countryService: CountryServiceService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data as Country[];
    });
  }

  onCountrySelected(country: Country): void {
    this.selectedCountry = country;
    this.cities = country.cities;
  }

}
