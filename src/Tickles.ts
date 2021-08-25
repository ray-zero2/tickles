import { Animation } from "./Animation";
import { Fade } from './Fade';
import { Displacement } from './Displacement';
import { CustomAnimation } from './CustomAnimation';
import { AnimationOptions, Options, TransitionMode } from "./@types/Types";

export class Tickles {
  public canvas: HTMLCanvasElement;
  public image: HTMLImageElement;
  public wrapper: HTMLElement;
  public gl: WebGLRenderingContext;
  public options: Options;

  constructor(options: Options) {
    this.options = options;
    this.wrapper = options.element;
    const image = this.wrapper.querySelector<HTMLImageElement>('img');
    if(!image) throw new Error('image element is not found');
    this.image = image;
    this.canvas = document.createElement('canvas');
    const gl = this.canvas.getContext('webgl');
    if(!gl) throw new Error('this browser can not use webgl');
    this.gl = gl;

    this.init();
  }

  public oneShot(options: AnimationOptions): void {
    console.log(options);
  }
  public start(options: AnimationOptions): void {}
  public stop(): void {}
  public finish(): void {}
  public reset(): void {}
  public switchHTML(): void {}
  public destroy(): void {}

  protected init(): void {
    this.setup();
    this.bind();
  }

  private setup(): void {
    const mode = this.options.mode || 'fade';
    const animationInstance = this.createInstance(mode);
    animationInstance.init(this.options);
  }

  private bind(): void {}

  private createInstance(mode: TransitionMode): Animation {
    switch (mode) {
      case 'fade':
        return new Fade();
      case 'displacement':
        return new Displacement();
      case 'custom':
        return new CustomAnimation();
    }
  }
}
