import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @Input() camera!:string
  @Input() clickpicture!:string
  constructor() { }

  ngOnInit(): void {
  }

}
