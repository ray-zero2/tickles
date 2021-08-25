import { Options } from './@types/Types';
import { Animation } from './Animation';

export class CustomAnimation implements Animation {
  time: number;
  progress: number;
  isAnimated: boolean;
  constructor() {
    this.time = 0;
    this.progress = 0;
    this.isAnimated = false;
  }

  init(options: Options) {
    console.log('init');
    console.log(options);
  }
}
