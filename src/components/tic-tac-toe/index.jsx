import useTicTacToe from "./hooks/service"

function TicTacToe() {
  const { board, resetGame, getStatusMessage, handleClick } = useTicTacToe();

  return (
    <div className='game'>
      <div className='status'>
        {getStatusMessage()}
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
      </div>
      <div className='board'>
        {board.map((b, index) => {
          return <button className='cell' key={index} onClick={() => handleClick(index)} disabled={b !== null}>{b}</button>
        })}
      </div>
    </div>
  )
}

export default TicTacToe

