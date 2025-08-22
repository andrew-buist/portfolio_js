'use client'

import '../styles/grid_scroll.css'

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Draggable from 'react-draggable';
import { useZIndex, ZIndexProvider } from '../components/ZIndexContext'

export default function App() {
  const nullNodeRef = useRef(null) /** due to version changes, must pass node ref to draggable but can be empty */

  type DraggableWrapperProps = {
    id: string;
    children: React.ReactNode;
  };

  const DraggableWrapper = ({ id, children }: DraggableWrapperProps) => {
    const { zIndexMap, bringToFront } = useZIndex();
    const z = zIndexMap[id] ?? 0;

    return (
      <Draggable
        nodeRef={nullNodeRef}
        handle=".handle">
        <div
          ref={nullNodeRef}
          onMouseDownCapture={() => { bringToFront(id) }}
          style={{ zIndex: z, position: 'absolute', cursor: 'default' }}>
          {children}
        </div>
      </Draggable>
    );
  };

  return (
    <ZIndexProvider>
      <div className="w-full h-full">
        <DraggableWrapper id="box1">
          <div className="bg-greylight inline-block max-w-2/10 aspect-square">
            <div className="handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0 inset-shadow-sm/80 inset-shadow-white px-2 py-1">Capybara</div>
            <div className="px-6 py-2 border-palette-b1">
              <img src = "https://images.wallpapersden.com/image/download/capybara-muzzle-nose_aWtmbZSZmpqtpaSklGZsbGetZmZtZg.jpg"/>
            </div>
          </div>
        </DraggableWrapper>
        <DraggableWrapper id="box2">
          <div className="bg-greylight inline-block max-w-2/10 aspect-square">
            <div className="handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0 inset-shadow-sm/80 inset-shadow-white px-2 py-1">Yapyara</div>
            <div className="px-6 py-2 border-palette-b1">
              <img src = "https://cdn.zmescience.com/wp-content/uploads/2017/06/Capybara_portrait.jpg"/>
            </div>
          </div>
        </DraggableWrapper>
      </div>
    </ZIndexProvider >
  );
}