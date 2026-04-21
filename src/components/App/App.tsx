// src/components/App/App.tsx

import SearchBar from "../SearchBar/SearchBar"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <SearchBar />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
