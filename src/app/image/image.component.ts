import { Component } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
src: string = ""
transformation: string = ""
// Rotate
rotateStat:   boolean = false
// translate
translateStat: boolean = false
// Scale
scaleStat:    boolean = false
// opactiy
opacityStat:  boolean = false
// opactiy
shadowStat:  boolean = false

  constructor() { }

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
    this.transform()
  }
  translate(){
    this.translateStat = (this.translateStat === false ? true : false);
    this.transform()
  }
  scale(){
    this.scaleStat = (this.scaleStat === false ? true : false);
    this.transform()
  }
  opacity(){
    this.opacityStat = (this.opacityStat === false ? true : false);
  }
  shadow(){
    this.shadowStat = (this.shadowStat === false ? true : false);
  }

  transform(){
    if(this.scaleStat && this.rotateStat && this.translateStat){
      this.transformation  = 'rotate(45deg) scale(0.5) translateX(40px)'
    } else if(this.scaleStat && this.rotateStat){
      this.transformation  =  'rotate(45deg) scale(0.5)'
    } else if(this.scaleStat && this.translateStat){
      this.transformation  =  'translateX(40px) scale(0.5)'
    } else if(this.rotateStat && this.translateStat){
      this.transformation  =  'translateX(40px) rotate(45deg)'
    } else if(this.rotateStat){
      this.transformation  =  'rotate(45deg)'
    } else if(this.translateStat){
      this.transformation  =  'translateX(40px)'
    } else if(this.scaleStat){
      this.transformation  =  'scale(0.5)'
    } else {
      this.transformation  = ""
    }
  }
  reset(){
    this.src             = ""
    this.transformation  = ""
    this.rotateStat      = false
    this.translateStat   = false
    this.scaleStat       = false
    this.opacityStat     = false
    this.shadowStat     = false
  }
}
