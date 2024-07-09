import * as React from 'react';
import { DrawingProviderProps } from '../context/DrawingProvider';
import { SeriesContextProviderProps } from '../context/SeriesContextProvider';
import { ChartsSurfaceProps } from '../ChartsSurface';
import { CartesianContextProviderProps } from '../context/CartesianContextProvider';
export type ChartContainerProps = Omit<ChartsSurfaceProps & SeriesContextProviderProps & Omit<DrawingProviderProps, 'svgRef'> & CartesianContextProviderProps, 'children'> & {
    children?: React.ReactNode;
};
declare const ChartContainer: React.ForwardRefExoticComponent<Omit<ChartsSurfaceProps & SeriesContextProviderProps & Omit<DrawingProviderProps, "svgRef"> & CartesianContextProviderProps, "children"> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export { ChartContainer };
