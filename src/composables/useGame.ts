import {ref} from "vue";
import {BoardUpdater} from "@/classes/BoardUpdater";

// @ts-ignore
const board: Ref<boolean[][]> = ref([]);
const initialised = ref(false);
const timeInterval = ref(0);
const isStarted = ref(false);

export const useGame = () => {
    const initBoard = (rows: number, columns: number) => {
        if (initialised.value) return;
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push(false);
            }
            board.value.push(row);
        }
        initialised.value = true;
    }

    const startGame = () => {
        isStarted.value = true;
        // @ts-ignore
        timeInterval.value = setInterval(updateBoard, 200);
    }

    const stopGame = () => {
        isStarted.value = false;
        clearInterval(timeInterval.value);
    }

    const updateBoard = () => {
        const updater = new BoardUpdater();
        const newBoard = updater.getNext(board.value);
        console.log(newBoard);
        board.value = newBoard;
    }

    const toggleAlive = (i: number, j: number) => {
        board.value[i][j] = !board.value[i][j];
    }

    const loadGliderGun = () => {
        board.value[5][1]  = true
        board.value[6][1]  = true
        board.value[5][2]  = true
        board.value[6][2]  = true
        board.value[4][12]  = true
        board.value[3][13]  = true
        board.value[3][14]  = true
        board.value[5][11]  = true
        board.value[6][11]  = true
        board.value[7][11]  = true
        board.value[8][12]  = true
        board.value[9][13]  = true
        board.value[9][14]  = true
        board.value[4][16]  = true
        board.value[8][16]  = true
        board.value[5][17]  = true
        board.value[6][17]  = true
        board.value[7][17]  = true
        board.value[6][18]  = true
        board.value[6][15]  = true
        board.value[3][21]  = true
        board.value[4][21]  = true
        board.value[5][21]  = true
        board.value[3][22]  = true
        board.value[4][22]  = true
        board.value[5][22]  = true
        board.value[2][23]  = true
        board.value[6][23]  = true
        board.value[1][25]  = true
        board.value[2][25]  = true
        board.value[6][25]  = true
        board.value[7][25]  = true
        board.value[3][35]  = true
        board.value[4][35]  = true
        board.value[3][36]  = true
        board.value[4][36]  = true
    }

    return {
        board,
        initialised,
        initBoard,
        startGame,
        stopGame,
        isStarted,
        toggleAlive,
        loadGliderGun,
    }
}