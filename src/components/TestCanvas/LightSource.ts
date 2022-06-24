import { PI2 } from 'utils/Math';

const LightSource = (canvasWidth: number, canvasHeight: number) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 1.4;
    const radius = canvasWidth / 48 > 48 ? 48 : canvasWidth / 48 < 24 ? 24 : canvasWidth / 48;

    const drawRadialGradientBehindLightSource = (ctx: CanvasRenderingContext2D) => {
        const gradientRadius = radius * 16;
        const gradient = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            gradientRadius
        );

        gradient.addColorStop(0, 'rgb(102, 103, 171, 0.2)');
        gradient.addColorStop(1, 'rgb(31, 31, 36, 0.1)');
        ctx.fillStyle = gradient;
        ctx.arc(centerX, centerY, gradientRadius, 0, PI2);
        ctx.fill();
    }

    const drawLightSource = (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(102, 103, 171)';
        ctx.arc(centerX, centerY, radius, 0, PI2);
        ctx.fill();
    }

    const drawLightLines = (
        ctx: CanvasRenderingContext2D,
        pointCenterX: number,
        pointCenterY: number) => {
            ctx.strokeStyle = 'rgb(176, 176, 212, 0.24)';
            ctx.lineWidth = 1;
            ctx.moveTo(centerX, centerY - radius);
            ctx.lineTo(pointCenterX, pointCenterY);
            ctx.stroke();
        }

        return [drawRadialGradientBehindLightSource,drawLightSource,drawLightLines] as const
}

export default LightSource;