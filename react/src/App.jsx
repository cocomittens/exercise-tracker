import { ExerciseProvider } from './context/exercise';
import Home from './pages/Home';
import CreateExercise from './pages/CreateExercise';
import EditExercise from './pages/EditExercise';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigation } from './components/Navigation';


import './App.css'

function App() {
  return (
    <ExerciseProvider>
      <Router>
      <Navigation />
      <header>
        <h1>Exercise Tracker</h1>
        <p>App to keep track of a list of exercises.</p>
        <p>Click the icons to delete or edit an exercise, or create an exercise with the create button above.</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/edit" element={<EditExercise />} />
      </Routes>
      </Router>
      <footer>
        © 2024 Corrie Stoddard
      </footer>
    </ExerciseProvider>
  )
}

export default App
