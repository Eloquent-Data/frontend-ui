import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.minLength(7)],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
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
  
  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe(
      res=>{
        if(res.token){
          const color = 'danger';
          const message = 'Welcome'
          
          this.showNotification('bottom','right', color, message)
          this.authService.setToken(res.token);
          this.router.navigateByUrl('/')
        }
      }, (err)=>{
        const color = 'danger';
        const message = '<b>Email or Password is</b> INCORRECT <br> <br> <b>If you are new </b>REGISTER.'
        this.showNotification('bottom','right', color, message)
        
      }
    )
  }
}
