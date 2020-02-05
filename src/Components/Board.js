import React, {Component} from 'react';
import Square1 from './Square1';
import '../style.css';

class Board extends Component{

    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(null),
            isNext: true,
        }
    }

    handleClick(i){
        const {squares, isNext}= this.state;
        squares[i]=isNext? 'X': 'O';
        this.setState({
            squares:squares,
            isNext: !isNext,
        })
    }

    calculateWinner(squares){
        let lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

        for(let i=0;i<lines.length;i++){
            const [a, b, c]= lines[i];
            if(squares[a] && squares[a]==squares[b] && squares[a]==squares[c]){
                return squares[a];
            }
        }
        return null;
    }

renderSquare(i){
    const {squares, isNext}= this.state;
    return(
        <Square1 value={squares[i]} onClick={()=> this.handleClick(i)}></Square1>
    )
}

newGame(){
    this.setState({
        squares: Array(9).fill(null),
        isNext:true
    })
}

    render(){

        let status;
        const {squares, isNext}= this.state;
        const winner= this.calculateWinner(squares);
        console.log('winner is', winner);

        if (winner) {
        status = 'Winner: ' + winner;
        } else {
        status = 'Next player: ' + (this.state.isNext ? 'X' : 'O');
        }
        
        return(
        <div>
            <div class="status"><b>{status}</b></div>
        <div style={{marginBottom: '8%'}}>
            <button onClick={()=> this.newGame()}>New Game</button>
            </div>
            <div class="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
            </div>
            <div class="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
            </div>
            <div class="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
            </div>
        </div>
        )
    }
}

export default Board