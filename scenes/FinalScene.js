export function HappyEndScene() {
  const firstTxt = add([
    text('You found all of the gemstones!', {size: 22, font: 'sinko', width: 300}), 
    color(255,255,255),
    origin('center'),  
    pos(width() / 2, height() / 2),
  ])

  wait(4, () => {
    destroy(firstTxt)
    const secondTxt = add([
      text('1234', {size: 22, font: 'sinko', width: 300}), 
      color(255,255,255),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
    wait(4, () => {
      destroy(secondTxt)
    })
  })

  wait(8, () => {
    const thirdTxt = add([
      text('5678', {size: 22, font: 'sinko', width: 300}), 
      color(255,255,255),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
    wait(4, () => {
      destroy(thirdTxt)
    })
  })

  wait(12, () => {
    const fourthTxt = add([
      text('Will you marry me?', {size: 22, font: 'sinko', width: 300}), 
      color(255,255,255),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
  })
}