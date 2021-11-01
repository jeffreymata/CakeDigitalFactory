import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";


@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})

export class LoginPage implements OnInit {

    validationUserMessage ={
        email:[
          {type:"required", message:"Please enter your Email"},
          {type:"pattern", message:"The Email entered is Incorrect.Try again"}
        ],
        password:[
          {type:"required", message:"please Enter your Password!"},
          {type:"minlength", message:"The Password must be at least 5 characters or more"}
    
        ]
      }

    validationFormUser: FormGroup;

    constructor(public formbuider: FormBuilder,private router: Router
        , private nav: NavController){}

    ngOnInit() {
        this.validationFormUser = this.formbuider.group({
          email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])),
          password: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(5)
          ]))
        })
      
        }


        
}

export class varss {
  public a: string;
  public b: string;
} 