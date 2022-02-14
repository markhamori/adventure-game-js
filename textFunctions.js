export function npcText(t, c, p) {
  const obj = add([
    text(t, { size: 8, font: "sink", width: 50 }),
    color(parseInt(c)),
    pos(p.pos),
  ])

  wait(2, () => {
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