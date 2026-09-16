import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {

passType:string = "password"

togglePassword():void{
this.passType = this.passType === "password" ? "text" : "password";
}

}
