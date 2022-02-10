import { renderHook } from '@testing-library/react-hooks'
import { describe, expect, test, vi } from 'vitest'
import { sendScoreToClassification } from '../services/scoreBoardService'
import useScoreBoardContext from './useScoreBoardContext'

const mockSet = vi.fn()
vi.mock('react', async () => {
  const actual = await vi.importActual('react')

  return {
    ...actual,
    useState: () => [null, mockSet]
  }
})

vi.mock('../services/scoreBoardService', () => ({
  sendScoreToClassification: vi.fn()
}))

describe('Pruebas sobre el hook useScoreBoardContext', () => {
  test('debe realizar correctamente la lógica de actualizar el marcador', () => {
    const localScore = 0
    const visitorScore = 1
    const { actions } = renderHook(() => useScoreBoardContext()).result.current

    actions.updateScoreBoard(localScore, visitorScore)

    expect(mockSet).toHaveBeenCalledTimes(2)
    expect(sendScoreToClassification).toHaveBeenCalledTimes(1)

    expect(mockSet.mock.calls[0][0]).toBe(localScore)
    expect(mockSet.mock.calls[1][0]).toBe(visitorScore)
    expect(sendScoreToClassification).toHaveBeenCalledWith(
      localScore,
      visitorScore
    )
  })
})
