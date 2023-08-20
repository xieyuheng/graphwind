import { State } from "../State"

export function updateHovered(state: State): void {
  delete state.hovered
  let distance = 0.5
  for (const [id, mouseDistance] of state.mouseDistances) {
    if (mouseDistance.distance < distance) {
      distance = mouseDistance.distance
      state.hovered = id
    }
  }
}
