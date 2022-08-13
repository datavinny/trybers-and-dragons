import Monster from "./Monster";

class Dragon extends Monster {
  constructor(
    strength: number,
    lifePoints: number = 999,
    private _element: string = 'fire',
    ) {
      super(lifePoints, strength)
  }
}

export default Dragon;