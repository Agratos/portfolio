import { PI2 } from "utils/Math";

const Point = (pointGap: number, i:number, canvasWidth: number, canvasHeight: number) => {
    const pointCenterX = pointGap * i;
    const centerLine = canvasHeight / 3;
    const velocity = 0.005;
    const amplitude = canvasHeight / 14;
    const pointRadius = canvasWidth / 370 > 5.8 ? 5.8 : canvasWidth / 370 < 2.5 ? 2.5 : canvasWidth /370;
    let radian = i * 0.38;
    let pointCenterY = amplitude * Math.sin(radian) + centerLine;
    
    const animate = (ctx: CanvasRenderingContext2D) => {
        radian += velocity;
        pointCenterY = amplitude * Math.sin(radian) + centerLine;

        ctx.beginPath();
        ctx.fillStyle = 'rgb(102, 103, 171)';
        ctx.arc(pointCenterX, pointCenterY, pointRadius, 0, PI2);
        ctx.fill();
    }

    return [animate, pointCenterX, pointCenterY] as const
}

export default Point;