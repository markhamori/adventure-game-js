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
    'v     ]                       v',
    'v7                            v',
    'v7           ]   *yyyyyyyyyym v',
    'v7                            v',
    'v7--- ^   ^^^^   ^            v',
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
  '??': () =>  [sprite('tree-2'), area({width: 20, height: 20}),origin('center'), solid(),'wall'],
  '`': () =>  [sprite('tree-3'), area({width: 20, height: 20}),origin('center'), solid(), 'wall'],
  '2': () =>  [sprite('tree-5'), area({width: 20, height: 20}),origin('center'), solid(),'wall'],
  '{': () =>  [sprite('mushroom-1')],
  '1': () =>  [sprite('grass-2')],
  '8': () =>  [sprite('bucket'), area({width: 28, height: 27}),origin('center'), solid(), 'wall'],
  '7': () =>  [sprite('wood-pile'), area({width: 20, height: 20}), origin('center'), solid(), 'wall'],
  'q': () =>  [sprite('wood-cut'), area({width: 20, height: 20}), origin('center'), solid(), 'wall'],
  'l': () =>  [sprite('teddy'), area(), 'teddy'],
  'k': () =>  [sprite('pumpkin'), area({width: 10, height: 10})],
}

export const floors = [
  [
	'       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '       22                      ',
  '2222222222222222222222222222222',
  '2222222222222222222222222222222',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '5555555555555555555555555555555',
  '5555555555555555555555555555555',
  '5555555555555555555555555555555',
  '5555555555555555555555555555555',
  '                               ',
  '                               ',
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

export const house = [
  [
	'                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '    ab ab ab    ab             ',
  '    cd cd cd    cd             ',
  '    ef ef ef    ef             ',
  '    gh gh gh    gh             ',
  '    ij ij ij    ij             ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  ]
]

export const houseConfig = {
  width: 48,
  height: 42,
  'a': () =>  [
    sprite('house-left-top-1'), area(), origin("center"), "house"
  ],
  'b': () =>  [
    sprite('house-right-top-1'), area(), origin("center"), "house"
  ],
  'c': () =>  [
    sprite('house-roof-left-1'), area(), origin("center"), "house"
  ],
  'd': () =>  [
    sprite('house-roof-right-1'), area(), origin("center"), "house"
  ],
  'e': () =>  [
    sprite('house-front-left-1'), area(), origin("center"), solid(), "house"
  ],
  'f': () =>  [
    sprite('house-front-right-1'), area(), origin("center"), solid(), "house"
  ],
  'g': () =>  [
    sprite('house-front-middle-1'), area({width: 30, height: 30}), origin("center"), solid(), "house"
  ],
  'h': () =>  [
    sprite('house-front-middle-2'), area({width: 30, height: 30}), origin("center"), solid(), "house"
  ],
  'i': () =>  [
    sprite('house-front-bottom-1'), area({width: 30, height: 30}), origin("center"), solid(), "house"
  ],
  'j': () =>  [
    sprite('house-front-bottom-2'), area({width: 30, height: 30}), origin("center"), solid(), "house"
  ],
}

export const environment = [
  [
	'                               ',
  '     13   13   jl           jl ',
  '     24   24   km           km ',
  '        13  1313 1313     jl   ',
  '        24132424 2424     km   ',
  '   13jl   24                   ',
  '   24km       13               ',
  '              24               ',
  '                    abc        ',
  '                    def        ',
  '                    ghi        ',
  '                               ',
  '              56               ',
  '              78            jl ',
  '                            km ',
  '                               ',
  '          jljl                 ',
  '          kmkm                 ',
  '                               ',
  '                               ',
  '                  13           ',
  '                  2413         ',
  '  13         jl     2413       ',
  '  24         km       24       ',
  '                               ',
  '  ``                    13     ',
  '  ????                    24     ',
  '  ^      13 13 13              ',
  '         24 24 24   13    13   ',
  '                    24    24   ',
  '                               ',
  ]
]

export const environmentConfig = {
	width:32,
	height: 32,
  '1': () =>  [
    sprite('tree-left-top-1'), area({width: 30, height: 30}), origin('center'), "tree"
  ],
  '2': () =>  [
    sprite('tree-left-bottom-1'), area({width: 30, height: 30}), origin('center'), "tree"
  ],
  '3': () =>  [
    sprite('tree-right-top-1'), area({width: 30, height: 30}), origin('center'), "tree"
  ],
  '4': () =>  [
    sprite('tree-right-bottom-1'), area({width: 30, height: 30}), origin('center'), "tree"
  ],

  'j': () =>  [
    sprite('tree-left-top-2'), area({width: 30, height: 30}), origin('center'), "tree"
  ],
  'k': () =>  [
    sprite('tree-left-bottom-2'), area({width: 30, height: 30}), origin('center'), "tree"
  ],
  'l': () =>  [
    sprite('tree-right-top-2'), area({width: 30, height: 30}), origin('center'), "tree"
  ],
  'm': () =>  [
    sprite('tree-right-bottom-2'), area({width: 30, height: 30}), origin('center'), "tree"
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
  '??': () =>  [
    sprite('simple-box'),origin('center'), area({width: 20, height:20}), solid()
  ],
}

export const treasures = [
  [
	'                               ',
  '     *                  /      ',
  '                4              ',
  '                               ',
  '                               ',
  '   3                           ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                  2            ',
  '                               ',
  '                               ',
  '             6                 ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '               9               ',
  '                               ',
  '                               ',
  '                               ',
  '                               ',
  '                        5      ',
  '   1           7               ',
  '                               ',
  '                               ',
  '                             8 ',
  ]
]

export const treasuresConfig = {
	width:32,
	height: 32,
  '1': () =>  [
    sprite('gem-1'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '2': () =>  [
    sprite('gem-2'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '3': () =>  [
    sprite('gem-3'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '4': () =>  [
    sprite('gem-4'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '5': () =>  [
    sprite('gem-5'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '6': () =>  [
    sprite('gem-6'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '7': () =>  [
    sprite('gem-7'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '8': () =>  [
    sprite('gem-8'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '9': () =>  [
    sprite('gem-9'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '*': () =>  [
    sprite('gem-10'), area({width: 10, height: 10}), "gem", origin('center'), scale(0.5)
  ],
  '/': () =>  [
    sprite('chest'), area({width: 10, height: 10}), { opened: false, }, "chest", area(), solid(), scale(1.2)
  ],
}