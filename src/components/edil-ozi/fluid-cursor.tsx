"use client";
import { useEffect } from "react";
import useFluidCursor from "@/hooks/useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor(); // Call the hook
  }, []);

  return (
    <div className="fixed top-0 left-0 z-2">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};

export default FluidCursor;
