export function npcText(t, c, p) {
  const obj = add([
    text(t, { size: 6, font: "sink", width: 50 }),
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
      pos(120,276),
      color(parseInt(c)),
      layer('ui')
    ])
    wait(2, () => {
      destroy(obj)
    })
}