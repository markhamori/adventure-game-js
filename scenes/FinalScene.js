export function HappyEndScene() {
  const zeroText = add([
    sprite('zeroText'),
    scale(0.5),
    origin('center'),  
    pos(width() / 2, height() / 2),
  ])

  wait(4, () => {
    destroy(zeroText)
    const firstTxt = add([
      sprite('firstText'),
      scale(0.5),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
    wait(4, () => {
      destroy(firstTxt)
    })
  })

  wait(8, () => {
    const secondTxt = add([
      sprite('secondText'),
      scale(0.5),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
    wait(4, () => {
      destroy(secondTxt)
    })
  })

  wait(12, () => {
    const thirdTxt = add([
      sprite('thirdText'),
      origin('center'),  
      scale(0.5),
      pos(width() / 2, height() / 2),
    ])
    wait(4, () => {
      destroy(thirdTxt)
    })
  })

  wait(16, () => {
    const forthText = add([
      sprite('forthText'),
      origin('center'),  
      scale(0.5),
      pos(width() / 2, height() / 2),
    ])
  })
}