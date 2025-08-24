'use client'

import '../styles/grid_scroll.css'

import React from "react";
import DraggableCustom from '../components/DraggableCustom';

export default function App() {
  return (
      <div className="w-screen h-screen">
        <DraggableCustom id="box1">
          <div className="bg-greylight rounded-md aspect-square">
            <div className="handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0 inset-shadow-sm/80 inset-shadow-white px-2 py-1 rounded-md">box1</div>
            <div className="px-4 py-2 border-palette-b1">
              Test text, box1
            </div>
          </div>
        </DraggableCustom>
        <DraggableCustom id="box2">
          <div className="bg-greylight rounded-md aspect-square">
            <div className="handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0 inset-shadow-sm/80 inset-shadow-white px-2 py-1 rounded-md">box2</div>
            <div className="px-4 py-2 border-palette-b1">
              Test text, box2
            </div>
          </div>
        </DraggableCustom>
      </div>
  );
}