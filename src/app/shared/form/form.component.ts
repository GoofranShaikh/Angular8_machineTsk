import { TagContentType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
@Input() whichPage:string

  profileForm:any
  address:any
  formArray:any
  age:number
 
  url='http://localhost:4200/assets/images/profile.png'
  isEmailValid: boolean=false;
  isFnameValid: boolean=false;
  isMobileNoValid: boolean=false;

  tags = [
    // { value: 'Cricket', display: 'Cricket' },
    // { value: 'Football', display: 'Football' },
    // { value: 'Hockey', display: 'Hockey' }
  ];
 
  constructor(private service:HttpService, private router:Router) { }

  ngOnInit() {
    this.address=''
    this.age=20
    this.makeProfile()
   


   

  
  }

  closeRegisterModal():void{
    document.getElementById("myModal").style.display="none"
  }
  onSubmit(){
 
    console.log(this.url)
    this.service.postProfile(this.profileForm.value).subscribe((response)=>{
      console.log(response)
    })
    localStorage.setItem('reload','true')
    this.router.navigate(['profile'])

  }
  whichaddress(e:any){
    console.log(e.target.value)
    console.log(this.profileForm.get('Address').untouched)

    this.address=e.target.value

  }
  
  profileChange(e:any){
    if(e.target.files){

      var reader =new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.url=event.target.result
        this.makeProfile()        
      }    
    }

  }

  makeProfile(){
    this.profileForm=new FormGroup({
      id:new FormControl(),
      profile:new FormControl(this.url,[Validators.required]),
      FirstName:new FormControl('',[Validators.required]),
      LastName:new FormControl(),
      Email:new FormControl('',[Validators.required]),
      MobileNo:new FormControl('',[Validators.required]),
      Age:new FormControl('',[Validators.required]),
      State:new FormControl('',[Validators.required]),
      Country:new FormControl('',[Validators.required]),
      Address:new FormGroup({
        Home:new FormGroup({
        Address1:new FormControl(),
        Address2:new FormControl()
        
      }),
      Company:new FormGroup({
        Address1:new FormControl(),
        Address2:new FormControl()
        
      })
     
      },[Validators.required]),
      
        tags:new FormControl('',[Validators.required]),
        newsletter:new FormControl()
      
    });

  }
  EmailValidation(email:any){

    var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    this.isEmailValid = regex.test(email);   //test method will check for patern match in 'regex'
        return this.isEmailValid
  }

  FirstNameValidation(name:any){

    var regex = new RegExp(/^([A-Z,a-z]){1,20}$/);
    this.isFnameValid = regex.test(name);   //test method will check for patern match in 'regex'

        return this.isFnameValid
  }

  mobileNoChange(mobile:string){
    var regex=new RegExp(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/)       //	This Pattern is to Validate Mobile Number with 10 digit Number and Countrycode as Optional.
    this.isMobileNoValid=regex.test(mobile)
    return this.isMobileNoValid
  }
  
  tagChange(){
    console.log(this.tags)
  }

}
