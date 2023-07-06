import styles from './index.module.css';

const Home = () => {
 //0->未クリック
 //1->左クリック
 //2->？
 //3->旗
  const [userinput, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const bombCount = 10;
  //0->ボムなし
  //1->ボムあり
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const isPlaying = userinput.some((row) => row.some((input) => input !== 0));
  const isFailure = userinput.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  //-1->石
  //0 =>画像無しセル
  //1~8=> 数字セル
  //9 =>石＋？
  //10=>石＋旗
  //11=>ボムセル
  const board: number[][] = [];
  let zeroList: { x: number; y: number }[]
for () {
  zeroList = // board + directions + userInputs + bombMap
}
let openedCount: number
for () {
  openedCount = // board
}
const isSuccess = // openedCount + bombCount
let isFailure: boolean
for () {
  isFialure = // userInputs + bombMap
}
let isStarted: boolean
for () {
  isStarted = // userInputs
}
// prettier-ignore
const directions = [[-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];
const bombCount = 10

const [userInputs, setUserInputs] = useState(...
  const [bombMap, setBombMap] = useState(...

const handleClick = (x, y) => {
      // Check if the cell contains a bomb
  if (bombMap[y][x] === 1) {
      // Game over logic
      
    } else {
        // Reveal the cell and continue the game
        const newUserInputs = [...userInputs];
        newUserInputs[y][x] = 1;
        setUserInputs(newUserInputs);
      }
  };
  
  return (
    <div className={styles.board}>
      {userInputs.map((row, y) => (
        row.map((cell, x) => (
          <div
            className={styles.cell}
              onClick={() => handleClick(x, y)}
                  >
                      {cell === 1 && (bombMap[y][x] ? '💣' : '🚩')}
                  </div>
              ))
          ))}
      </div>
  );
export default Home;
