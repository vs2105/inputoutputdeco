import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
   @Input() msgfromcoding!:string
 @Input() msgfromparent!:string;
  @Input() msgfromsenior!:string;
  msgfromchild : string ="i will work hard";
 @Output() getmsgfromchild:EventEmitter<string>=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onMsgSend(){
    this.getmsgfromchild.emit("i will work hard")
  }


}
