
import './App.css';
import TodoList from './component/TodoList';
import TodoContextProvider from './contexts/TodoContext'
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import ToggleTheme from './component/ToggleTheme'
import Navbar from './component/Navbar'
function App() {
  return (
    <div className="App">
     
        <ThemeContextProvider>
        <AuthContextProvider>
        <Navbar/>
        <ToggleTheme/>
        <TodoContextProvider>
       <TodoList/>
       
       </TodoContextProvider>
       </AuthContextProvider>
       </ThemeContextProvider>
    </div>
  );
}

export default App;
