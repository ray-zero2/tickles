
import { IEasingMap } from "../Easings";

type TransitionMode = 'fade' | 'displacement' | 'custom';
type TimeDirection = 'forward' | 'backward' | 'alternate';
type TransitionDirection = 'none' | 'up' | 'down' | 'left' | 'right';
type CubicBezier = [number, number, number, number];
type Spring = [number, number];
interface ITextureSettings {
  texture: HTMLImageElement;
  objectFit: 'fill' | 'cover' | 'contain';
}
interface IUniform<T = any> {
  value: T;
}
interface ICustomSettings {
  vertex?: string;
  fragment?: string;
  uniforms?: { [uniform: string]: IUniform; };
}
export interface Options {
  element: HTMLElement;
  pixelRatio?: number;
  dev?: boolean;
  mode?: TransitionMode;
  initialImage?: ITextureSettings;
  displacement?: ITextureSettings;
  custom?: ICustomSettings;
}
export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: keyof IEasingMap | CubicBezier | Spring;
  timeDirection?: TimeDirection;
  transitionDirection?: TransitionDirection;
  update?: (progress: number) => void;
}
