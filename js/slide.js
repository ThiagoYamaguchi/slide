export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addSlideEvents('mousemove', this.onMove);
  }

  onMove(event) {
    
  }

  onEnd(event) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addSlideEvents('mousedown', this.onStart);
    this.wrapper.addSlideEvents('mouseup', this.onEnd);
  }

  bindEvent() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvent();
    this.addSlideEvents();
    return this;
  }
}
