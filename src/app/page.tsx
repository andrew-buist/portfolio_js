'use client'

import '../styles/grid_scroll.css'

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Draggable from 'react-draggable';
import { useZIndex, ZIndexProvider } from '../components/ZIndexContext'
import DraggableCustom from '../components/CustomDraggable';

export default function App() {

  type DraggableWrapperProps = {
    id: string;
    children: React.ReactNode;
  };

  const DraggableWrapper = ({ id, children }: DraggableWrapperProps) => {
    const { zIndexMap, bringToFront } = useZIndex();
    const z = zIndexMap[id] ?? 0;

    const nullNodeRef = useRef<HTMLDivElement>(null) /** due to version changes, must pass node ref to draggable but can be empty */

    return (
      <Draggable
        nodeRef={nullNodeRef}
        handle=".handle"
        bounds="parent">
        <div
          ref={nullNodeRef}
          onMouseDownCapture={() => { bringToFront(id) }}
          style={{ zIndex: z, position: 'absolute', cursor: 'default' }}
          className="inline-block max-w-100">
          {children}
        </div>
      </Draggable>
    );
  };

  return (
    <ZIndexProvider>
      <div className="w-screen h-screen">
        <DraggableCustom id="box1">
          <div className="bg-greylight rounded-md aspect-square">
            <div className="handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0 inset-shadow-sm/80 inset-shadow-white px-2 py-1 rounded-md">Capybara</div>
            <div className="px-4 py-2 border-palette-b1">
              <img src="https://images.wallpapersden.com/image/download/capybara-muzzle-nose_aWtmbZSZmpqtpaSklGZsbGetZmZtZg.jpg" alt="" />
            </div>
          </div>
        </DraggableCustom>
        <DraggableCustom id="box2">
          <div className="bg-greylight rounded-md aspect-square">
            <div className="handle cursor-pointer bg-palette-b1 border-palette-b1 font-bold text-palette-c0 inset-shadow-sm/80 inset-shadow-white px-2 py-1 rounded-md">Yapyara</div>
            <div className="px-4 py-2 border-palette-b1">
              <img src="https://cdn.zmescience.com/wp-content/uploads/2017/06/Capybara_portrait.jpg" alt="" />
              <p> This is a capy </p>
            </div>
          </div>
        </DraggableCustom>
      </div>
    </ZIndexProvider >
  );
}