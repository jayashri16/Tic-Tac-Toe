export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER!!!</h2>
      {winner && <p> {winner} won! </p>}
      {!winner && <p> IT's IS A DRAW !</p>}
      <p>
        <button onClick={onRestart} > REMATCH ?</button>
      </p>
    </div>
  );
}
