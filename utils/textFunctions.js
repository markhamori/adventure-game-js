export function npcText(t, c, p) {
  const obj = add([
    text(t, { size: 12, font: "sink", width: 110 }),
    color(255,255,255),
    outline(2),
    pos(p.pos),
  ])

  wait(4, () => {
    destroy(obj)
  })
}

export function healthText(h, c) {
    const obj = add([
      text(`+${h}`, { size: 8, font: "sink"}),
      pos(width() - 360, height() - 50),
      color(0,255,0),
      layer('ui'),
      fixed()
    ])
    wait(2, () => {
      destroy(obj)
    })
}

export function tableText(m, t) {
  const obj = add([
    text(m, { size: 8, font: "sink"}),
    pos(t.pos),
    color(0,255,0),
  ])
  wait(5, () => {
    destroy(obj)
  })
}

export function wallText(f) {
  const obj = add([
    text('WALL', { size: 6, font: "sink"}),
    pos(f.pos)
  ])
  wait(1, () => {
    destroy(obj)
  })
}

export function gemText(f,g) {
  const obj = add([
    text('YOU FOUND A GEM', { size: 6, font: "sink", width: 10}),
    pos(f.pos),
    color(255,255,255)
  ])
  wait(1, () => {
    destroy(obj)
  })
}