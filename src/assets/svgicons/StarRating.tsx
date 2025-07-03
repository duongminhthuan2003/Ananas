export const EmptyStar = ({ className = "", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
         fill="#CCCCCC" stroke="none" className={className}>
        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"/>
    </svg>
);

export const FilledStar = ({ className = "", color = "#FF6530", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
         fill={color} stroke="none" className={className}>
        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"/>
    </svg>
);

export const FullStar = ({ className = "", color = "#FF6530", size = 24 }) => (
    <FilledStar className={className} color={color} size={size} />
);

export const HalfStar = ({ className = "", color = "#FF6530", size = 24 }) => (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <EmptyStar className="absolute inset-0" size={size} />
        <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <FilledStar color={color} size={size} />
        </div>
    </div>
);

export const StarRating = ({ rating, size = 24 }: { rating: number; size?: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const totalStars = 5;

    return (
        <div className="flex gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <FullStar key={`full-${i}`} size={size} />
            ))}
            {hasHalfStar && <HalfStar key="half" size={size} />}
            {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                <EmptyStar key={`empty-${i}`} size={size} />
            ))}
        </div>
    );
};

