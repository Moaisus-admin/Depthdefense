import React, { ComponentType } from "react";
import GridPattern from "./Grid-pattern";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

const withGridBackground =
  <P extends object>(
    Component: ComponentType<P>,
    gridProps: GridPatternProps = {}
  ): ComponentType<P> =>
  (componentProps: P) =>
    (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <Component {...componentProps} />
        <GridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={4}
          repeatDelay={0.5}
          className="absolute inset-0 h-full w-full"
          {...gridProps}
        />
      </div>
    );

export default withGridBackground;
