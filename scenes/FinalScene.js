export function HappyEndScene() {
  const firstTxt = add([
    text('You found all of the gemstones!', {size: 22, font: 'sinko', width: 300}), 
    color(255,255,255),
    origin('center'),  
    pos(width() / 2, height() / 2),
  ])

  wait(5, () => {
    destroy(firstTxt)
    const secondTxt = add([
      text('Na jo. Mar lehet kozben kitalaltad "mire megy ki a jatek" :D', {size: 22, font: 'sinko', width: 300}), 
      color(255,255,255),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
    wait(5, () => {
      destroy(secondTxt)
    })
  })

  wait(8, () => {
    const thirdTxt = add([
      text('Mondjuk remenykedem, hogy megsem, es tenyleg meglepeteskent er ez az egesz', {size: 22, font: 'sinko', width: 300}), 
      color(255,255,255),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
    wait(5, () => {
      destroy(thirdTxt)
    })
  })

  wait(12, () => {
    const fourthTxt = add([
      text('Meg persze akkora boldogsaggal, mint amekkora izgatottsaggal raktam ossze ezt neked...', {size: 22, font: 'sinko', width: 300}), 
      color(255,255,255),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
    wait(5, () => {
      destroy(fourthTxt)
    })
  })

  wait(16, () => {
    const fifthText = add([
      text('Hozzam jossz felesegul? ♥', {size: 22, font: 'sinko', width: 300}), 
      color(255,255,255),
      origin('center'),  
      pos(width() / 2, height() / 2),
    ])
  })
}