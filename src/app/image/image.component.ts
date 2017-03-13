import { Component, OnInit, animate, state, style, transition, trigger } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations: [trigger(
    'rotating',
    [
      state('true, void', style({transform: 'rotate(45deg)'})),
      transition(
          '* <=> *', [animate(500, style({transform: 'rotate(45deg)'})), animate(500)])
    ]),

    trigger(
    'translating',
    [
      state('true, void', style({transform: 'translateX(-40px)'})),
      transition(
          '* <=> *', [animate(500, style({transform: 'translateX(-40px)'})), animate(500)])
    ]),
    trigger(
    'scaling',
    [
      state('true', style({transform: 'scale(0.5)'}))
    ]),
    trigger('opaciting', [
    // What happens when toggleState is true
      state('true' , style({ opacity: '0.5' })),
      // What happens when toggleState is false
      state('false', style({}))
    ])


  ]
})
export class ImageComponent implements OnInit {
src: string = ""
// Rotate
rotateStat:   boolean = false
// translate
tranlateStat: boolean = false
// Scale
scaleStat:    boolean = false
// opactiy
opacityStat:  boolean = false

  constructor() { }

  ngOnInit() {
  }

  resizeOptions: ResizeOptions = {
      resizeMaxHeight: 400,
      resizeMaxWidth: 400
  }
  selected(imageResult: ImageResult) {
    this.src = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
}

  rotate(){
    this.rotateStat = (this.rotateStat === false ? true : false);
  }
  translate(){
    this.tranlateStat = (this.tranlateStat === false ? true : false);
  }
  scale(){
    this.scaleStat = (this.scaleStat === false ? true : false);
  }
  opacity(){
    this.opacityStat = (this.opacityStat === false ? true : false);
  }
}
