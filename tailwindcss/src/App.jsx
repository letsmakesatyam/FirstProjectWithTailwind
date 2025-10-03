import React from 'react'

import './App.css'

function App() {


  return (
    <div class="relative w-full h-screen overflow-hidden bg-[#0f021f]">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#9333ea_1px,transparent_1px),linear-gradient(to_bottom,#9333ea_1px,transparent_1px)] bg-[size:80px_80px] animate-move"></div>
  </div>

  <div class="absolute w-[700px] h-[700px] bg-violet-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
  <div class="absolute w-[600px] h-[600px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  <div class="absolute w-[500px] h-[500px] bg-indigo-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

  <div class="relative z-10 flex items-center justify-center h-full">
    <h1 class="text-5xl font-bold text-violet-100 drop-shadow-2xl">Welcome to My Future 🚀</h1>
  </div>
</div>
  )
}

export default App
