/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: save the dog
@author: 
@tags: []
@addedOn: 2025-00-00
*/

const player = "p"
const wall = "w"
const background = "b"
const coin = "c"
const goal = "g"

setLegend(
  [ player, bitmap`
...333333.......
...32202........
....22222.......
....2222........
....2222........
..000000000.....
..030333030.....
..030333030.....
..030333030.....
..030000030.....
..005555500.....
....55555.......
....55.55.......
....55.55.......
....55.55.......
....55.55.......` ],
   [ wall, bitmap`
LLLLLLLLLLLLLLLL
LL11111LL11111LL
L1L1111LL1111L1L
L11LLLLLLLLLL11L
L11LL11LL11LL11L
L11L1L1LL1L1L11L
L11L11LLLL11L11L
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
L11L11LLLL11L11L
L11L1L1LL1L1L11L
L11LL11LL11LL11L
L11LLLLLLLLLL11L
L1L1111LL1111L1L
LL11111LL11111LL
LLLLLLLLLLLLLLLL` ],
  [ background, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL` ],
  [ coin, bitmap`
.....999999.....
....96664669....
...9666444669...
..966644444469..
.96666464664469.
9666664646664669
9666664646666669
9666664646666669
9666664446666669
9666666444466669
9666666646466669
.96666664646669.
..966446464669..
...9664444469...
....96664669....
.....999999.....` ],
  [ goal, bitmap`
................
................
...CCCCCCCCCC...
..CCCCCCCCCCCC..
.CCCCCCCCCCCCCC.
CCCCCCCCCCCCCCCC
6666666666666666
6666666666666666
CCCCCCC66CCCCCCC
CCCCCCC66CCCCCCC
CCCCCCC66CCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC` ]
  
)

setSolids([player, wall,coin])

let level = 0
const levels = [
  map`
wwwwwww
w.w...w
w...p.w
w..c..g
w..w..w
wwwwwww`,
   map`
p.....ww
..wwww..
.w......
.w...ww.
..w.w.w.
..wcw.w.
....w.wg`,
     map`
p...wwww...w
.........www
..wwwwwwwwww
...........w
...........w
.w......ww.w
.w..w..w.w..
.w..w.......
.wcww..wwwww
....w......g`,
]

setBackground(background)



setPushables({
  [ player ]: [coin]
})

onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})
afterInput(() => {
  
})

const currentLevel = levels[level];
setMap(currentLevel);


afterInput(() => {

  const targetNumber = tilesWith(goal).length;
  

  const numberCovered = tilesWith(goal, coin).length;

  if (numberCovered === targetNumber) {
    
    level = level + 1;

    const currentLevel = levels[level];

        if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("you win!", { y: 4, color: color`3` });
    }
  }
});
