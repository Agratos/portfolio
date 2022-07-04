import { RefObject } from 'react';
import styled from 'styled-components';

import { useCanvas } from 'hooks/useCanvas';
import LightSource from './LightSource';
import Point from './Point';
import { useClientWidthHeight } from 'hooks/useClientWidthHeight';

interface TestCanvasProps {
    canvasWidth: number;
    canvasHeight: number;
}
interface Point {
    animate(ctx: CanvasRenderingContext2D): void,
    pointCenterX: number,
    pointCenterY: number
}
const TestCanvas = ({canvasWidth, canvasHeight}: TestCanvasProps) => {
    const fillBackground = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'rgb(31, 31, 36)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    };

    const [drawRadialGradientBehindLightSource,drawLightSource,drawLightLines] = LightSource(canvasWidth, canvasHeight);

    let points: Point[] = [];
    const initPoints = () => {
        const pointNumber = 72;
        const pointGap = canvasWidth / pointNumber;

        for(let i = 0; i <= pointNumber; i++){
            let [animate, pointCenterX, pointCenterY]= Point(pointGap, i, canvasWidth, canvasHeight);
            points.push({animate,pointCenterX, pointCenterY});
        }
    }
    if(canvasWidth !== 0 && canvasHeight !== 0) initPoints();

    const animate = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        fillBackground(ctx);
        drawRadialGradientBehindLightSource(ctx);
        drawLightSource(ctx);

        for(let i = 0; i < points.length; i++){
            //drawLightLines(ctx, points[i].pointCenterX, points[i].pointCenterY);
            points[i].animate(ctx);
        }; 
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