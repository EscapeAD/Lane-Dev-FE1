import { Component, OnInit, animate, state, style, transition, trigger } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations: [trigger(
    'rotating',
    [
      state('rot', style({transform: 'rotate(45deg)'})),
      state('rotTran', style({transform: 'rotate(45deg) translateX(-40px)'})),
      state('rotScale', style({transform: 'rotate(45deg) scale(0.5)'})),
      state('rotTranScal', style({transform: 'rotate(45deg) translateX(-40px) scale(0.5)'})),
      state('none', style({transform: 'rotate(0deg)'})),
      // transition(
      //     '* <=> *', [animate(500, style({transform: 'rotate(45deg)'})), animate(500)])
    ]),

    trigger(
    'translating',
    [
      state('tran', style({transform: 'translateX(-40px)'})),
      state('rotTran', style({transform: 'rotate(45deg) translateX(-40px)'})),
      state('rotTranScal', style({transform: 'rotate(45deg) translateX(-40px) scale(0.5)'})),
      state('tranScale', style({transform: 'translateX(-40px) scale(0.5)'})),
      state('none', style({transform: 'translateX(0px)'})),
      // transition(
      //     '* <=> *', [animate(500, style({transform: 'translateX(-40px)'})), animate(500)])
    ]),
    trigger(
    'scaling',
    [
      state('true', style({transform: 'scale(0.5)'})),
      transition(
          '* <=> *', [animate(500, style({ transform: 'scale(0.5)' })), animate(500)])
    ]),
    trigger('opaciting', [
    // What happens when toggleState is true
      state('true' , style({ opacity: '0.5' })),
      // What happens when toggleState is false
      state('false', style({})),
      transition(
          '* <=> *', [animate(500, style({ opacity: '0.5' })), animate(500)])
    ])


  ]
})
export class ImageComponent implements OnInit {
src: string = ""
// Rotate
rotateStat:   boolean = false
rotString:    string  = "none"
// translate
tranlateStat: boolean = false
tranlateString: string = 'none'
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
    if(this.rotateStat && this.tranlateStat && this.scaleStat){
      this.rotString = 'rotTranScal'
    } else if (this.rotateStat && this.tranlateStat) {
      this.rotString = 'rotTran'
    } else if (this.rotateStat && this.scaleStat) {
      this.rotString = 'rotScale'
    } else if(this.rotateStat) {
      this.rotString = 'rot'
    } else if(!this.rotateStat){
      this.rotString = 'none'
    }
  }
  translate(){
    this.tranlateStat = (this.tranlateStat === false ? true : false);
    if(this.rotateStat && this.tranlateStat && this.scaleStat){
      this.tranlateString = 'rotTranScal'
    } else if (this.rotateStat && this.tranlateStat) {
      this.tranlateString = 'rotTran'
    } else if (this.tranlateStat && this.scaleStat) {
      this.rotString = 'tranScale'
    } else if(this.rotateStat) {
      this.tranlateString = 'tran'
    } else if(!this.rotateStat){
      this.tranlateString = 'none'
    }
  }
  scale(){
    this.scaleStat = (this.scaleStat === false ? true : false);
  }
  opacity(){
    this.opacityStat = (this.opacityStat === false ? true : false);
  }
}
