import { RefObject } from 'react';
import styled from 'styled-components';

import { useCanvas } from 'hooks/useCanvas';
import LightSource from './LightSource';

interface TestCanvasProps {
    canvasWidth: number;
    canvasHeight: number;
}
const TestCanvas = ({canvasWidth, canvasHeight}: TestCanvasProps) => {
    const fillBackground = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'rgb(31, 31, 36)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    };

    const [drawRadialGradientBehindLightSource,drawLightSource,drawLightLines] = LightSource(canvasWidth, canvasHeight);
    

    const animate = (ctx: CanvasRenderingContext2D) => {
        fillBackground(ctx);
        drawRadialGradientBehindLightSource(ctx);
        drawLightSource(ctx);
    }

    const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(
        canvasWidth,
        canvasHeight,
        animate
    );

    return <Canvas ref={canvasRef} />;
}

const Canvas = styled.canvas``;

export default TestCanvas;