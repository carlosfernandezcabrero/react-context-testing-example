import useScoreBoardContext from '../../store/useScoreBoardContext'
import { Scoreboard } from '../scoreboard/Scoreboard'
import './App.css'

function App () {
  const { getProvider: ScoreBoardProvider } = useScoreBoardContext()

  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen flex flex-col items-center justify-center">
      <p className="text-5xl">Score Board</p>
      <ScoreBoardProvider>
        <Scoreboard />
      </ScoreBoardProvider>
    </div>
  )
}

export default App
