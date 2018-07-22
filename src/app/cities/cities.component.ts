import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [FormBuilder]
})
export class CitiesComponent implements OnInit {
  signupForm: FormGroup;
  selected: string = '';
  show: boolean = true;
  dropdownValues = [ { city_name: "Bandung", prov_name: "Jawa Barat" },
               { city_name: "Jakarta", prov_name: "DKI Jakarta" },
               { city_name: "Surabaya", prov_name: "Jawa Timur" },
               { city_name: "Yogyakarta", prov_name: "DI Yogyakarta" },
               { city_name: "Semarang", prov_name: "Jawa Tengah" },
               { city_name: "Medan", prov_name: "Sumatera Utara" },
               { city_name: "Tangerang", prov_name: "Banten" },
               { city_name: "Denpasar", prov_name: "Bali" },
               { city_name: "Makasar", prov_name: "Sulawesi Selatan" }];

  constructor(private fb:FormBuilder, private spinnerService: Ng4LoadingSpinnerService) {

   }

  ngOnInit() {
    console.log("City Component Init");
    this.signupForm  = this.fb.group({     
      city: ['', Validators.required]     
  })

  this.signupForm.patchValue({
    city:  'Denpasar'
  });
  this.selected = 'Denpasar';
  }

  select(value: any) {
    this.signupForm.get('city').setValue(value.target.value);
    alert(this.signupForm.value);
  }

  changeVal() {
    if(this.show) {    
    this.spinnerService.show();
    this.show = false;
    this.selected = 'Medan';
   } else {
      this.show = true;    
      this.spinnerService.hide();
    }
  }
  
}
