import { useMemo } from 'react';

export default function Tag({ title, color }: { title?: string; color?: string }) {
    const colors = useMemo(() => {
        switch (color) {
            case 'red':
                return { textColor: 'text-shopeeRed', backgroundColor: 'bg-red-50', border: 'border-[1px] border-shopeeRed' };
            case 'yellow':
                return { textColor: 'text-yellow-500', backgroundColor: 'bg-yellow-50', border: 'border-[1px] border-yellow-500' };
            default:
                return {};
        }
    }, [color]);

    return (
        <div className={`${colors.textColor} rounded-[1px] ${colors.backgroundColor} ${colors.border} px-1 py-[1px] text-[10px]`}>
            {title}
        </div>
    );
}
