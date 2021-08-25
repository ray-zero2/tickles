import { Tickles } from "./Tickles";

const element = document.querySelector<HTMLElement>('.js-tickles')!;
const plane = new Tickles({
  element
});

plane.oneShot({})
