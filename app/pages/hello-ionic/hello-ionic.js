import {Page} from 'ionic-angular';
import {Http} from 'angular2/http';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.items = [];

    this.slidesOptions = {
      loop: true,
      autoplay: 1000,
      pager: true,
    }
  }

  onClick() {
    this.items = [{
      name: 'Slide 1',
    }, {
      name: 'Slide 2',
    }, {
      name: 'Slide 3',
    }];
  }
}
