class Slider {
  constructor(images, currentIndex = 0) {
    this._images = images;
    this.currentIndex = currentIndex;
  }
  get images() {
    return this._images;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(value) {
    if (typeof value !== 'number') {
      throw new TypeError();
    }
    if (value > this._images.length - 1) {
      this._currentIndex = 0;
    }
    this._currentIndex = value;
  }

  get currentSlide() {
    return this.images[this.currentIndex];
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this._images.length;
    return this.currentSlide;
  }
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this._images.length) % this._images.length;
    return this.currentSlide;
  }
}