import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  typeofcamera:string="GALAXY PRO-GRADE CAMERA"
  cameraexp:string="Get the big picture"
  processor:string="4NM PROCESSOR"
  pName:string="Galaxy";
  title = 'i love javascript';
  msgforchild:string=" work hard party hard";
  msgforjuniors:string="Trust yourself that you can do it and get it";
  msgforcoders:string="Think Twice Code Ones!";
  msgfromchild!:string;



  onmsgfromChild(e:string){
    console.log(e)
    this.msgfromchild=e
  }
 
}
