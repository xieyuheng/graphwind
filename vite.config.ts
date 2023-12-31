import { resolve } from "node:path"
import { defineConfig } from "vite"

const inputFiles = [
  "index.html",
  "demo-play.html",
  "demo-flow-field-effect.html",
  "demo-drawing-board.html",
  "demo-super-magnet.html",
  "demo-binary-tree-grid-layout.html",
  "demo-graph-force-directed-layout.html",
  "demo-analytic-geometry.html",
]

function buildInput() {
  return Object.fromEntries(
    inputFiles.map((file) => [file, resolve(__dirname, file)]),
  )
}

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: buildInput(),
    },
  },
  test: {
    coverage: {
      provider: "istanbul",
      // provider: "c8",
    },
  },
})
