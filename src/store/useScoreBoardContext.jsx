import { createContext, useState } from 'react'
import { sendScoreToClassification } from '../services/scoreBoardService'

export const scoreBoardContext = createContext()

export default function useScoreBoardContext () {
  const [localScore, setLocalScore] = useState(0)
  const [visitorScore, setVisitorScore] = useState(0)

  function getProvider ({ children }) {
    return (
      <scoreBoardContext.Provider
        value={{ localScore, visitorScore, actions }}
      >
        {children}
      </scoreBoardContext.Provider>
    )
  }

  const actions = {
    updateScoreBoard: (localScore, visitorScore) => {
      sendScoreToClassification(localScore, visitorScore)
      setLocalScore(localScore)
      setVisitorScore(visitorScore)
    }
  }

  return { actions, getProvider }
}
