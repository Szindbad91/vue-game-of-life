export class BoardUpdater {
    public getNext(board: boolean[][]): boolean[][] {
        const newBoard: boolean[][] = [];
        for (let i = 0; i < board.length; i++) {
            newBoard.push([])
            for (let j = 0; j < board[i].length; j++) {
                newBoard[i].push(this.isLiveInNextStep(i, j, board));
            }
        }
        return newBoard;
    }

    private isLiveInNextStep(row: number, column: number, board: boolean[][]): boolean {
        const neighbours = [
            this.isCellAlive(board[row - 1] ? board[row - 1][column - 1] : undefined),
            this.isCellAlive(board[row - 1] ? board[row - 1][column] : undefined),
            this.isCellAlive(board[row - 1] ? board[row - 1][column + 1] : undefined),
            this.isCellAlive(board[row] ? board[row][column - 1] : undefined),
            this.isCellAlive(board[row] ? board[row][column + 1] : undefined),
            this.isCellAlive(board[row + 1] ? board[row + 1][column - 1] : undefined),
            this.isCellAlive(board[row + 1] ? board[row + 1][column] : undefined),
            this.isCellAlive(board[row + 1] ? board[row + 1][column + 1] : undefined),
        ]
        const liveCount = neighbours.filter((isLive) => isLive).length;

        return (board[row][column] && (liveCount === 2 || liveCount === 3)) ||
            (!board[row][column] && liveCount === 3);

    }

    private isCellAlive(cellValue: boolean | undefined) {
        if (!cellValue) return false;
        else return cellValue;
    }

}