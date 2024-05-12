import { useSound } from 'use-sound';

export function useClick() {

    const result = useSound('/sounds/click.ogg', {
        volume: 0.05,
    });
    return result;
}

export default useClick