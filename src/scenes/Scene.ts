import { Container, Sprite } from "pixi.js";

export class Scene extends Container {
  private screenWidth: number;
  private screenHeight: number;
  private clampy: Sprite;

  constructor(screenWidth: number, screenHeight: number) {
    super();

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.clampy = Sprite.from("clampy.png");
    this.clampy.anchor.set(0.5);
    this.clampy.x = screenWidth / 2;
    this.clampy.y = screenHeight / 2;
    alert(this.clampy.x + "x" + this.clampy.y);
    this.addChild(this.clampy);
  }

  // Method to handle resizing
  public onResize(newWidth: number, newHeight: number): void {
    this.screenWidth = newWidth;
    this.screenHeight = newHeight;
    this.clampy.x = this.screenWidth / 2;
    this.clampy.y = this.screenHeight / 2;
    console.log(`Clampy position: (${this.clampy.x}, ${this.clampy.y})`); // Debugging line
  }
}
