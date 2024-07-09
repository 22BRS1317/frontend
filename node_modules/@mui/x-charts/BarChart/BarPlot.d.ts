import * as React from 'react';
import { BarElementProps, BarElementSlotProps, BarElementSlots } from './BarElement';
import { BarItemIdentifier } from '../models';
export interface BarPlotSlots extends BarElementSlots {
}
export interface BarPlotSlotProps extends BarElementSlotProps {
}
export interface BarPlotProps extends Pick<BarElementProps, 'slots' | 'slotProps'> {
    /**
     * If `true`, animations are skipped.
     * @default false
     */
    skipAnimation?: boolean;
    /**
     * Callback fired when a bar item is clicked.
     * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
     * @param {BarItemIdentifier} barItemIdentifier The bar item identifier.
     */
    onItemClick?: (event: React.MouseEvent<SVGElement, MouseEvent>, barItemIdentifier: BarItemIdentifier) => void;
}
/**
 * Demos:
 *
 * - [Bars](https://mui.com/x/react-charts/bars/)
 * - [Bar demonstration](https://mui.com/x/react-charts/bar-demo/)
 * - [Stacking](https://mui.com/x/react-charts/stacking/)
 *
 * API:
 *
 * - [BarPlot API](https://mui.com/x/api/charts/bar-plot/)
 */
declare function BarPlot(props: BarPlotProps): React.JSX.Element;
declare namespace BarPlot {
    var propTypes: any;
}
export { BarPlot };
