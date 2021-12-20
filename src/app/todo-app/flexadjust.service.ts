import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlexadjustService {

  isOpen:Boolean = true;

  constructor() { }

  flexAdjust(){
    this.isOpen = !(this.isOpen);
    console.log(this.isOpen);
  }

  flexState() {
    return this.isOpen;
  }
}
