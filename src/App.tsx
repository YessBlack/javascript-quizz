import './App.css'
import { Container, Stack, Typography, useTheme } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";
import { JavaScriptLogo } from './assets/JavascriptLogo'
import { Game } from './components/Game';
import { Results } from './components/Results';
import { useQuestionsStore } from './store/questions';
import { useQuestionsData } from './hooks/useQuestionsData';
import { Start } from './components/Start';

function App () {
  const questions = useQuestionsStore(state => state.questions)
  console.log('questions', questions)
  const { unanswered } = useQuestionsData()

  const theme = useTheme()

  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant={medium ? 'h2' : 'h5'} component='h1'>
            JavaScript Quiz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && unanswered > 0 && <Game />}
        {questions.length > 0 && unanswered === 0 && <Results />}
      </Container>
    </main>
  )
}

export default App
