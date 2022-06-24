import { useEffect, useState } from 'react';

export const useCount = (start: number, end: number, interval: number, gap: number, increase: string) => {
    const [count, setCount] = useState(start);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if(increase === '+'){
                if(count < end) setCount(count => count + gap)
            } else {
                if(count > end) setCount(count => count - gap)
            }
        }, interval)
        return () => clearTimeout(timeout);
    },)

    return count;
};