'use client'

import '../styles/grid_scroll.css'

import React, { useEffect } from "react";
import DraggableCustom from '../components/DraggableCustom';

export default function App() {

  useEffect(() => {
  }, []);

  return (
    <div id="top" className="flex w-screen h-screen items-center justify-center">
      <div id="main1" className="flex-row w-8/10 h-8/10 bg-winbg/50 border-winbar border-1 rounded-md">
        <div>
          <DraggableCustom id="box1">
            <div className="bg-winbg/90 rounded-md">
              <div className="handle cursor-pointer bg-winbar border-winbar border-1 font-bold text-winbar-text inset-shadow-sm inset-shadow-white px-2 py-1 rounded-md">Introduction</div>
              <div id="content1" className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="px-4 py-2 text-wintext">
                  Test text, box1
                </div>
                <div className="px-4 py-2 text-wintext">
                  Test text, box1
                </div>
                <div className="px-4 py-2 text-wintext">
                  Test text, box1
                </div>
                <div className="px-4 py-2 text-wintext">
                  Test text, box1
                </div>
                <div className="px-4 py-2 text-wintext">
                  Test text, box1
                </div>
                <div className="px-4 py-2 text-wintext">
                  Test text, box1
                </div>
              </div>
            </div>
          </DraggableCustom>
        </div>
        <div>
          <DraggableCustom id="box2">
            <div className="bg-winbg/90 rounded-md">
              <div className="handle cursor-pointer bg-winbar border-winbar border-1 font-bold text-winbar-text inset-shadow-sm inset-shadow-white px-2 py-1 rounded-md">Details</div>
              <div className="px-4 py-2 text-wintext">
                Test text, box2
              </div>
            </div>
          </DraggableCustom>
        </div>
      </div>
    </div>
  );
}