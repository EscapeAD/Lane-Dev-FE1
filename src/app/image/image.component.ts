import { Component, OnInit} from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
src: string = ""
// Rotate
rotateStat:   boolean = false
// translate
translateStat: boolean = false
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
    this.translateStat = (this.translateStat === false ? true : false);
  }
  scale(){
    this.scaleStat = (this.scaleStat === false ? true : false);
  }
  opacity(){
    this.opacityStat = (this.opacityStat === false ? true : false);
  }
}
