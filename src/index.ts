import { Application } from "pixi.js";
import { Scene } from "./scenes/Scene";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: window.innerWidth,
  height: window.innerHeight,
});

const starterScene: Scene = new Scene(app.screen.width, app.screen.height);
app.stage.addChild(starterScene);

// Function to resize the canvas
function resize() {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  starterScene.onResize(window.innerWidth, window.innerHeight);
}

// Listen for window resize events
window.addEventListener("resize", resize);

// Initial resize to set up correct dimensions
resize();
