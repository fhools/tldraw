import CodeShape from "./index"
import { v4 as uuid } from "uuid"
import { CircleShape, ShapeType } from "types"

export default class Circle extends CodeShape<CircleShape> {
  constructor(props = {} as Partial<CircleShape>) {
    super({
      id: uuid(),
      type: ShapeType.Circle,
      isGenerated: true,
      name: "Circle",
      parentId: "page0",
      childIndex: 0,
      point: [0, 0],
      rotation: 0,
      radius: 20,
      style: {
        fill: "#777",
        stroke: "#000",
        strokeWidth: 1,
      },
      ...props,
    })
  }

  get radius() {
    return this.shape.radius
  }
}