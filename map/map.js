export const maps = [
  [
    'hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyj',
    'v] 8              ]      ]    v',
    'v  ,,           ]   7777      v',
    'v q   ]                 8     v',
    'v  k       {                  v',
    'v  .     ]       ]     ]      v',
    'v8  ]          ,           {  v',
    'v                             v',
    'v            ]      ] ]       v',
    'v     ]          ]            v',
    'v7                            v',
    'v7           ]         ]      v',
    'v7                            v',
    'v7--- ^  ^^^^   ^             v',
    'v                             v',
    'v                             v',
    'v8 ^      `           ` {{  ` v',
    'v  {                          v',
    'v  ]          ----        8   v',
    'v       ]                    ,v',
    'v                            ,v',
    'v    ]               ] {     ,v',
    'v     ]     ]                ,v',
    'v       ]          s      ]  ,v',
    'v  ] ]             v         ,v',
    'v    ]   ]         v          v',
    'v          ]       v    ]     v',
    'v {     *yyyyyyyyyyu          v',
    'v   8    {              ]     v',
    'v  777                    {  lv',
    'zyyyyyyyyyyyyyyyyyyyyyyyyyyyyyu',
  ]
]

export const mapConfig = {
  width: 32,
  height: 32,
  '*': () =>  [sprite('fence-left-end'), area({width: 20, height: 20}), solid(), 'wall'],
  'm': () =>  [sprite('fence-right-end'), area({width: 20, height: 20}), solid(), 'wall'],
  's': () =>  [sprite('fence-top-end'), area({width: 20, height: 20}), solid(), 'wall'],
  'h': () =>  [sprite('fence-top-left'), area({width: 20, height: 20}), solid(), 'wall'],
  'j': () =>  [sprite('fence-top-right'), area({width: 20, height: 20}), solid(), 'wall'],
  'v': () =>  [sprite('fence-left-connect'), solid(), area({width: 20, height: 20}), 'wall'],
  'x': () =>  [sprite('fence-1'), area(), solid(), 'wall'],
  'y': () =>  [sprite('fence-middle-connect'), area({width: 20, height: 20}), solid(),'wall'],
  'z': () =>  [sprite('fence-bottom-left'), area({width: 20, height: 20}), solid(), 'wall'],
  'u': () =>  [sprite('fence-bottom-right'), area({width: 20, height: 20}), solid(), 'wall'],
  ']': () =>  [sprite('tall-grass-1'), area()],
  '[': () =>  [sprite('tall-grass-2')],
  '.': () =>  [sprite('flower-1')],
  ',': () =>  [sprite('flower-2')],
  '-': () =>  [sprite('flower-3')],
  '^': () =>  [sprite('tree-1'), area({width: 20, height: 20}),origin('center'), solid(), 'wall'],
  '´': () =>  [sprite('tree-2'), area({width: 20, height: 20}),origin('center'), solid(),'wall'],
  '`': () =>  [sprite('tree-3'), area({width: 20, height: 20}),origin('center'), solid(), 'wall'],
  '2': () =>  [sprite('tree-5'), area({width: 20, height: 20}),origin('center'), solid(),'wall'],
  '{': () =>  [sprite('mushroom-1')],
  '1': () =>  [sprite('grass-2')],
  '8': () =>  [sprite('bucket'), area({width: 28, height: 27}),origin('center'), solid(), 'wall'],
  '7': () =>  [sprite('wood-pile'), area({width: 10, height: 10}), solid(), 'wall'],
  'q': () =>  [sprite('wood-cut'), area({width: 10, height: 10}), solid(), 'wall'],
  'l': () =>  [sprite('teddy'), area(), 'teddy'],
  'k': () =>  [sprite('pumpkin'), area({width: 10, height: 10})],

  'c': () =>  [sprite('house-floor-1'), "house-floor"],
}

export const floors = [
  [
	'hyyyyyy22yyyyyyyyyyyyyyyyyyyyyj',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  'v      22                     v',
  '2222222222222222222222222222222',
  '2222222222222222222222222222222',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  '55555555555555555555555       v',
  '55555555555555555555555       v',
  '55555555555555555555555       v',
  '55555555555555555555555       v',
  'v                             v',
  'zyyyyyyyyyyyyyyyyyyyyyyyyyyyyyu',
  ]
]

export const floorsConfig = {
	width:32,
	height: 32,
	"1": () => [
		sprite("floor-1"),
	],
  '2': () =>  [
    sprite('tiles-1')
  ],
  '3': () =>  [
    sprite('grass-1')
  ],
  '4': () =>  [
    sprite('floor-2')
  ],
  '5': () =>  [
    sprite('floor-3')
  ],
}

export const environment = [
  [
	'                               ',
  '     13   13                   ',
  '     24   24                   ',
  '        13  1313 1313          ',
  '        24132424 2424          ',
  '   13     24                   ',
  '   24         13               ',
  '              24               ',
  '                    abc        ',
  '                    def        ',
  '                    ghi        ',
  '                               ',
  '              56               ',
  '              78               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                  13           ',
  '                  2413         ',
  '      13            2413       ',
  '      24              24       ',
  '                               ',
  '  ``                    13     ',
  '  ´´                    24     ',
  '  ^                            ',
  '                    13    13   ',
  '                    24    24   ',
  '                               ',
  ]
]

export const environmentConfig = {
	width:32,
	height: 32,
  '1': () =>  [
    sprite('tree-left-top-1'), area({width: 10, height: 10}), "tree"
  ],
  '2': () =>  [
    sprite('tree-left-bottom-1'), area({width: 10, height: 10}), "tree"
  ],
  '3': () =>  [
    sprite('tree-right-top-1'), area({width: 10, height: 10}), "tree"
  ],
  '4': () =>  [
    sprite('tree-right-bottom-1'), area({width: 10, height: 10}), "tree"
  ],
  '5': () =>  [
    sprite('table-1'), "table"
  ],
  '6': () =>  [
    sprite('table-2'), "table"
  ],
  '7': () =>  [
    sprite('table-3'), area({width: 10, height: 10}), solid(), "table"
  ],
  '8': () =>  [
    sprite('table-4'), area({width: 20, height: 10}), solid(), "table"
  ],
  'a': () =>  [
    sprite('fountain-t-left'),origin('center'), area({width: 20, height: 20}), solid(), "fountain"
  ],
  'b': () =>  [
    sprite('fountain-t-center'),origin('center'), area({width: 20, height: 20}), solid(), "fountain"
  ],
  'c': () =>  [
    sprite('fountain-t-right'),origin('center'), area({width: 20, height: 20}), solid(), "fountain"
  ],
  'd': () =>  [
    sprite('fountain-m-left'),origin('center'), area({width: 20, height: 20}), solid(), "fountain"
  ],
  'e': () =>  [
    sprite('fountain-m-center'),origin('center'), area({width: 20, height: 20}), solid(), "fountain"
  ],
  'f': () =>  [
    sprite('fountain-m-right'),origin('center'), area({width: 20, height: 20}), solid(), "fountain"
  ],
  'g': () =>  [
    sprite('fountain-b-left'),origin('center'), area({width: 20, height: 20}), solid(), "fountain"
  ],
  'h': () =>  [
    sprite('fountain-b-center'),origin('center'), area({width: 20, height:20}), solid(), "fountain"
  ],
  'i': () =>  [
    sprite('fountain-b-right'),origin('center'), area({width: 20, height:20}), solid(), "fountain"
  ],
  '^': () =>  [
    sprite('bag-of-greens'),origin('center'), area({width: 20, height:20}), solid()
  ],
  '`': () =>  [
    sprite('bag-of-apples'),origin('center'), area({width: 20, height:20}), solid()
  ],
  '´': () =>  [
    sprite('simple-box'),origin('center'), area({width: 20, height:20}), solid()
  ],
}

export const treasures = [
  [
	'hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyj',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'zyyyyyyyyyyyyyyyyyyyyyyyyyyyyyu',
  ]
]

export const treasuresConfig = {
	width:32,
	height: 32,
  '1': () =>  [
    sprite('gem-1'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '2': () =>  [
    sprite('gem-2'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '3': () =>  [
    sprite('gem-3'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '4': () =>  [
    sprite('gem-4'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '5': () =>  [
    sprite('gem-5'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '6': () =>  [
    sprite('gem-6'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '7': () =>  [
    sprite('gem-7'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '8': () =>  [
    sprite('gem-8'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '9': () =>  [
    sprite('gem-9'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
  '*': () =>  [
    sprite('gem-10'), area({width: 10, height: 10}), "gem", scale(0.5)
  ],
}

export const potions = [
  [
	'hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyj',
  'v     2                       v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                3            v',
  'v                             v',
  'v                        2    v',
  'v    6      4                 v',
  'v                      7      v',
  'v                             v',
  'v                 5           v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'v                             v',
  'zyyyyyyyyyyyyyyyyyyyyyyyyyyyyyu',
  ]
]

export const potionConfig = {
	width:32,
	height: 32,
  '1': () =>  [
    sprite('potion-white'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '2': () =>  [
    sprite('potion-blue'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '3': () =>  [
    sprite('potion-brown'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '4': () =>  [
    sprite('potion-purple'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '5': () =>  [
    sprite('potion-orange'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '6': () =>  [
    sprite('potion-beige'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '7': () =>  [
    sprite('potion-green'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '8': () =>  [
    sprite('potion-green'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '9': () =>  [
    sprite('potion-green'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
  '*': () =>  [
    sprite('potion-green'), area({width: 10, height: 10}), "potion", scale(0.5)
  ],
}