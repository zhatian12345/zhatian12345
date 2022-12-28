import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)