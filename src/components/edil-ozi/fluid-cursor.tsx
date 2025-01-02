import { useEffect } from "react";

import fluidCursor from "@/hooks/useFluidCursor";

const FluidCursor = () => {

  useEffect(() => {
    fluidCursor();
  }, [])


  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full">
      <canvas id="fluid" className="w-full h-full pointer-events-none" />
    </div>
  );
};

export default FluidCursor;
