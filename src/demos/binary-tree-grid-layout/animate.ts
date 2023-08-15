import { createTree } from "../../tree/createTree.ts"
import { State } from "./State.ts"
import { drawGrid } from "./drawGrid.ts"
import { drawTree } from "./drawTree.ts"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  drawGrid(ctx, state)

  const tree = createTree({
    id: "a",
    children: [
      { id: "b", children: [{ id: "d" }, { id: "e" }] },
      {
        id: "c",
        children: [
          { id: "f", children: [{ id: "h" }, { id: "i" }] },
          { id: "g", children: [{ id: "j" }] },
        ],
      },
    ],
  })

  drawTree(ctx, state, tree, {
    mode: "preorder",
    offset: [state.unit * 2, state.unit * 1],
  })

  drawTree(ctx, state, tree, {
    mode: "inorder",
    offset: [state.unit * 2, state.unit * (1 + 5)],
  })

  drawTree(ctx, state, tree, {
    mode: "postorder",
    offset: [state.unit * 2, state.unit * (1 + 10)],
  })

  requestAnimationFrame(() => animate(ctx, state))
}
