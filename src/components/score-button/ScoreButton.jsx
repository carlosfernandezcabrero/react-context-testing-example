export function ScoreButton ({ local, dispatch }) {
  return (
    <button
      onClick={() => dispatch(local)}
      className={`${
        local ? 'bg-sky-600' : 'bg-yellow-600'
      } text-xl px-5 py-1 rounded text-white`}
    >
      +
    </button>
  )
}
