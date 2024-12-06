import { Button } from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import { useQuestionsData } from "../hooks/useQuestionsData"

export const Results = () => {
  const { correct, incorrect } = useQuestionsData()
  const reset = useQuestionsStore(state => state.reset)

  return (
    <div style={{ marginTop: '16px'}}>
      <h1>¡Tus resultados</h1>

      <strong>
        <p>✅ {correct} correctas</p>
        <p>❌ {incorrect} incorrectas</p>
      </strong>

      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>
          ¡Empezar de nuevo!
        </Button>
      </div>
    </div>
  )
}
