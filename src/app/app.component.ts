import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isDisableState = true;
  public isDisableCity = true;

  public defaultCountry: { countryName: string; countryId: number | any } = {
    countryName: 'Select Country',
    countryId: null,
  };
  public defaultState: { stateName: string; stateId: number | any } = {
    stateName: 'Select State',
    stateId: null,
  };
  public defaultCity: { cityName: string; cityId: number | any } = {
    cityName: 'Select City',
    cityId: null,
  };

  public dataCountry: Array<{ countryName: string; countryId: number }> = [
    { countryName: 'Australia', countryId: 1 },
    { countryName: 'India', countryId: 2 },
    { countryName: 'Pakisthan', countryId: 3 },
  ];

  public dataState: Array<{
    stateName: string;
    stateId: number;
    countryId: number;
  }> = [
    { stateName: 'New South Wales', stateId: 1, countryId: 1 },
    { stateName: 'Victoria', stateId: 2, countryId: 1 },
    { stateName: 'Queensland', stateId: 3, countryId: 1 },
    { stateName: 'Andhra Pradesh', stateId: 4, countryId: 2 },
    { stateName: 'Karnataka', stateId: 5, countryId: 2 },
    { stateName: 'Kerala', stateId: 6, countryId: 2 },
    { stateName: 'TamilNadu', stateId: 7, countryId: 2 },
    { stateName: 'Azad Jammu &Kashmir', stateId: 8, countryId: 3 },
    { stateName: 'Balochistan', stateId: 9, countryId: 3 },
    { stateName: 'Islamabad Capital Territory', stateId: 10, countryId: 3 },
  ];

  public dataCity: Array<{
    cityName: string;
    cityId: number;
    stateId: number;
  }> = [
    { cityName: 'Cardiff', cityId: 1, stateId: 1 },
    { cityName: 'NewPort', cityId: 2, stateId: 1 },
    { cityName: 'Swansea', cityId: 3, stateId: 1 },
    { cityName: 'Melbourne', cityId: 4, stateId: 2 },
    { cityName: 'Portland', cityId: 5, stateId: 2 },
    { cityName: 'Central Queensland', cityId: 6, stateId: 3 },
    { cityName: 'Central West Queensland', cityId: 7, stateId: 3 },
    { cityName: 'South West Queensland', cityId: 8, stateId: 3 },
    { cityName: 'Visakhapatnam', cityId: 7, stateId: 4 },
    { cityName: 'Tirupati', cityId: 8, stateId: 4 },
    { cityName: 'Bagalkot', cityId: 9, stateId: 5 },
    { cityName: 'Bengaluru Urban', cityId: 10, stateId: 5 },
    { cityName: 'Bengaluru Rural', cityId: 11, stateId: 5 },
    { cityName: 'Udupi', cityId: 12, stateId: 5 },
    { cityName: 'Alappuzha', cityId: 13, stateId: 6 },
    { cityName: 'Ernakulam', cityId: 14, stateId: 6 },
    { cityName: 'Kozhikode', cityId: 15, stateId: 6 },
    { cityName: 'Chennai', cityId: 16, stateId: 7 },
    { cityName: 'Coimbatore', cityId: 17, stateId: 7 },
    { cityName: 'Tirunelveli', cityId: 18, stateId: 7 },
    { cityName: 'New Mirpur City', cityId: 19, stateId: 8 },
    { cityName: 'Muzaffarabad', cityId: 20, stateId: 8 },
    { cityName: 'Chaman', cityId: 21, stateId: 9 },
    { cityName: 'Hub', cityId: 22, stateId: 9 },
    { cityName: 'Islamabad Rural', cityId: 23, stateId: 10 },
    { cityName: 'Rawalpindi', cityId: 24, stateId: 10 },
  ];
  public dataResultStates:
    | Array<{ stateName: string; stateId: number; countryId: number }>
    | undefined;
  public dataResultCity:
    | Array<{ cityName: string; cityId: number; stateId: number }>
    | undefined;

  public selectedCountry: { countryName: string; countryId: number } | any;
  public selectedState: { stateName: string; stateId: number } | any;
  public selectedCity: { cityName: string; cityId: number } | any;

  handleCountryChange(value: any) {
    this.selectedCountry = value;
    this.selectedState = undefined;
    this.selectedCity = undefined;

    if (value.countryId === this.defaultCountry.countryId) {
      this.isDisableState = true;
      this.dataResultStates = [];
    } else {
      this.isDisableState = false;
      this.dataResultStates = this.dataState.filter(
        (s) => s.countryId === value.countryId
      );
    }
    this.isDisableCity = true;
    this.dataResultCity = [];
  }
  handleStateChange(value: any) {
    this.selectedState = value;
    this.selectedCity = undefined;

    if (value.stateId === this.defaultState.stateId) {
      this.isDisableCity = true;
      this.dataResultCity = [];
    } else {
      this.isDisableCity = false;
      this.dataResultCity = this.dataCity.filter(
        (s) => s.stateId === value.stateId
      );
    }
  }
  handleCityChange(value: any) {
    this.selectedCity = value;
  }
}
