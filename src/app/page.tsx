'use client'

import '../styles/grid_scroll.css'

import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Draggable from "react-draggable";

export default function Home() {
    const draggableRef = React.useRef(null);
    return(
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Draggable 
          nodeRef = {draggableRef} 
          handle = ".handle">
            <div ref = {draggableRef} className = "bg-greylight border-palette-b1 border-4">
              <div className = "handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0">Welcome to my website!</div>
              <div className = "px-6 py-2">
                line<br/>
                line<br/>
                line<br/>
                line<br/>
                line<br/>
                line<br/>
              </div>
            </div>
          </Draggable>
          <Draggable 
          nodeRef = {draggableRef} 
          handle = ".handle">
            <div ref = {draggableRef} className = "bg-greylight border-palette-b1 border-4">
              <div className = "handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0">Welcome to my website!</div>
              <div className = "px-6 py-2">
                line<br/>
                line<br/>
                line<br/>
                line<br/>
                line<br/>
                line<br/>
              </div>
            </div>
          </Draggable>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
    );
}