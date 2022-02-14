export const maps = [
  [
    'hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyj',
    'v] 8              ]      ]    v',
    'v  ,,   ]    ]       7777     v',
    'v q                    8      v',
    'v  k    ,   {                 v',
    'v  .     ]       ]     ]      v',
    'v8                        {   v',
    'v                             v',
    'v            ]      ]         v',
    'v     ]                       v',
    'v7                            v',
    'v7           ]         ]      v',
    'v7                            v',
    'v7---                         v',
    'v99999999999999999999999999999v',
    'v99999999999999999999999999999v',
    'v8 ^^^^^^^              {{    v',
    'v  {                          v',
    'v             ----        8   v',
    'v       ]                    ,v',
    'v                            ,v',
    'v                    ] {     ,v',
    'v           ]                ,v',
    'v                  {         ,v',
    'v  ]                         ,v',
    'v                             v',
    'v          ]        ]         v',
    'v {                           v',
    'v   8    {                    v',
    'v  777             {         lv',
    'zyyyyyyyyyyyyyyyyyyyyyyyyyyyyyu',
  ]
]

export const mapConfig = {
  width: 32,
  height: 32,
  'a': () => [sprite('wall-left'), area(), solid(), 'wall'],
  'b': () =>  [sprite('wall-right'), area(), solid(), 'wall'],
  'c': () =>  [sprite('wall-top'), area(), solid(), 'wall'],
  'd': () =>  [sprite('wall-top-left'), area(), solid(), 'wall'],
  'e': () =>  [sprite('wall-top-right'), area(), solid(), 'wall'],
  'f': () =>  [sprite('wall-bottom-left'), area(), solid(), 'wall'],
  'g': () =>  [sprite('wall-bottom-right'), area(), solid(), 'wall'],
  'm': () =>  [sprite('fence-right-end'), area({width: 10, height: 10}), solid(), 'wall'],
  's': () =>  [sprite('fence-top-end'), area({width: 10, height: 10}), solid(), 'wall'],
  'h': () =>  [sprite('fence-top-left'), area({width: 10, height: 10}), solid(), 'wall'],
  'j': () =>  [sprite('fence-top-right'), area({width: 10, height: 10}), solid(), 'wall'],
  'v': () =>  [sprite('fence-left-connect'), area({width: 10, height: 10}), solid(), 'wall'],
  'x': () =>  [sprite('fence-1'), area(),  'wall', solid()],
  'y': () =>  [sprite('fence-middle-connect'), area({width: 10, height: 10}), solid(),'wall'],
  'z': () =>  [sprite('fence-bottom-left'), area({width: 10, height: 10}), solid(), 'wall'],
  'u': () =>  [sprite('fence-bottom-right'), area({width: 10, height: 10}), solid(), 'wall'],
  ']': () =>  [sprite('tall-grass-1'), area()],
  '[': () =>  [sprite('tall-grass-2')],
  '.': () =>  [sprite('flower-1')],
  ',': () =>  [sprite('flower-2')],
  '-': () =>  [sprite('flower-3')],
  '^': () =>  [sprite('tree-1'), area({width: 10, height: 10}), solid(), 'wall'],
  '´': () =>  [sprite('tree-2'), area({width: 10, height: 10}), solid(),'wall'],
  '`': () =>  [sprite('tree-3'), area({width: 10, height: 10}), solid(), 'wall'],
  '2': () =>  [sprite('tree-5'), area({width: 10, height: 10}), solid(),'wall'],
  '{': () =>  [sprite('mushroom-1')],
  '1': () =>  [sprite('grass-2')],
  '9': () =>  [sprite('floor-1')],
  '8': () =>  [sprite('bucket')],
  '7': () =>  [sprite('wood-pile'), area({width: 10, height: 10}), solid(), 'wall'],
  'q': () =>  [sprite('wood-cut'), area({width: 10, height: 10}), solid(), 'wall'],
  'l': () =>  [sprite('teddy'), area(), 'teddy'],
  'k': () =>  [sprite('pumpkin')],
}