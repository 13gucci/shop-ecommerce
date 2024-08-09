type Props = {
    lightColor?: string;
    darkColor?: string;
    size?: string;
    ratingScore: number;
};

export default function RatingStar({ darkColor = '#e7e5e4', lightColor = '#facc15', size = '3', ratingScore }: Props) {
    const getPercentageWidth = (index: number): string => {
        const difference = ratingScore - index;

        if (difference >= 1) {
            return '100%';
        } else if (difference > 0 && difference < 1) {
            const result = difference * 100;
            return `${Math.min(Math.max(result, 0), 100).toFixed(2)}%`;
        } else {
            return '0%';
        }
    };

    return (
        <div className='flex space-x-[1px]'>
            {Array(5)
                .fill(0)
                .map((_, index) => (
                    <div className='relative' key={index}>
                        <div className='absolute left-0 top-0 overflow-hidden' style={{ width: getPercentageWidth(index) }}>
                            <svg
                                enableBackground='new 0 0 15 15'
                                viewBox='0 0 15 15'
                                fill={lightColor}
                                x={0}
                                y={0}
                                className={`h-${size} w-${size}`}
                            >
                                <polygon
                                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeMiterlimit={10}
                                />
                            </svg>
                        </div>
                        {/* Dark star */}
                        <svg
                            enableBackground='new 0 0 15 15'
                            viewBox='0 0 15 15'
                            fill={darkColor}
                            x={0}
                            y={0}
                            className={`h-${size} w-${size}`}
                        >
                            <polygon
                                points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeMiterlimit={10}
                            />
                        </svg>
                    </div>
                ))}
        </div>
    );
}
