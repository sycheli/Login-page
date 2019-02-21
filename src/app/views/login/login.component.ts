import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router,private ngZone: NgZone) {}
  
    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
        
        this.ngZone.run(() => this.router.navigate(['dashboard'])).then();
        
          
        })
      .catch((err) => console.log('error: ' + err));
    };
    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
        this.ngZone.run(() => this.router.navigate(['dashboard'])).then();
        })
      .catch((err) => console.log(err));
    };
    signInWithEmail() {
      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          console.log(res);
          this.ngZone.run(() => this.router.navigate(['dashboard'])).then();
        })
        .catch((err) => console.log('error: ' + err));
    };

  ngOnInit() {
  }

}
