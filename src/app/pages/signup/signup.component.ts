import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'app/shared/data/countries';
import { Register } from 'app/shared/interfaces/data.interface';
import { AuthService } from 'app/shared/services/auth.service';


declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    country: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]],
    password2: ['', [Validators.required, Validators.minLength(7)]],
    userCategory: ['MEMBER', Validators.required],
    agreement: ['', Validators.required],
  });

  africanCountries: any[];


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAfricanCountries()
  }

  showNotification(from, align, color, message){
    const type = color;

    $.notify({
        icon: "notifications",
        message: message

    },{
        type: type,
        timer: 5000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

  getAfricanCountries(){

    const country_list = countries
    const africa=[]
    for (const [key, value] of Object.entries(country_list)) {
        if(value.continent=='AF') africa.push(value)
    }
    this.africanCountries = africa
  }
  
  onSubmit(){
    console.log(this.registerForm.value);

    const formValue = this.registerForm.value;

    const payload: Register = {
      country: formValue.country,
      firstName: formValue.firstName,
      gender: formValue.gender,
      lastName: formValue.lastName,
      password: formValue.password,
      userCategory: formValue.userCategory,
      userEmail: formValue.userEmail
    }

    if(!this.registerForm.value.agreement){
      let color = 'danger';
      let message = 'Please agree to our terms of service'
      this.showNotification('bottom','right', color, message)

    }else if(formValue.password!=formValue.password2){
        console.log(this.registerForm.value.password!=this.registerForm.value.password);
        
        let color = 'danger';
        let message = 'Password does not match'
        this.showNotification('bottom','right', color, message)
    }
    else{
      this.authService.register(payload).subscribe(
        res=>{
          if(res.success){
            const color = 'danger';
            const message = res.message + '<br> Kindly check your email'

            this.showNotification('bottom','right', color, message)
            this.router.navigateByUrl('/login')
          }
          else{
            const color = 'danger';
            const message = res.message
            this.showNotification('bottom','right', color, message)
          }
        }, (err)=>{
          const color = 'danger';
          const message = err.message
          this.showNotification('bottom','right', color, message)
        }
      )
    }
  }
}
