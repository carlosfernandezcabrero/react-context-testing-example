import { useContext, useEffect } from 'react'
import { scoreBoardContext } from '../../store/useScoreBoardContext'
import { ScoreBox } from '../score-box/ScoreBox'
import { ScoreButton } from '../score-button/ScoreButton'

export function Scoreboard () {
  const {
    localScore,
    visitorScore,
    actions: { updateScoreBoard }
  } = useContext(scoreBoardContext)

  function handleUpdateScore (local) {
    const newLocalScore = local ? localScore + 1 : localScore
    const newVisitorScore = !local ? visitorScore + 1 : visitorScore

    updateScoreBoard(newLocalScore, newVisitorScore)
  }

  useEffect(() => {
    if (localScore !== 10 && visitorScore !== 10) return

    if (localScore === 10) alert('The local team is the winner !!!')
    if (visitorScore === 10) alert('The visitor team is the winner !!!')

    updateScoreBoard(0, 0)
  }, [localScore, visitorScore])

  return (
    <div className="mt-10 grid grid-cols-3 gap-5">
      <ScoreBox score={localScore} />
      <span className="text-6xl text-center">-</span>
      <ScoreBox score={visitorScore} />

      <ScoreButton local={true} dispatch={handleUpdateScore} />
      <span></span>
      <ScoreButton local={false} dispatch={handleUpdateScore} />
    </div>
  )
}
