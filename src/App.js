import React, { useEffect, useState } from "react";
import LiveAvatar from "./components/LiveAvatar";
import TestVideo from "./components/TestVideo";
import VideoCard from "./components/VideoCard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const serverBaseURL = 'http://localhost:8000/stream_summary'

  return (
    <>
    <Router>
        <Routes>
          <Route path="/live" element={<LiveAvatar />} />
          <Route path="/test" element={<TestVideo />} />
          <Route path="/video" element={<VideoCard />} />
        </Routes>
        </Router>
    </>
  )
}
export default App;


