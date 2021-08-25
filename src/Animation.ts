import { Options } from "./@types/Types";

export interface Animation {
  time: number;
  progress: number;
  isAnimated: boolean;
  init: (options: Options) => void;
}
