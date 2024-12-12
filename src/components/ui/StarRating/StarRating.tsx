import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
    value: number; // Текущее значение рейтинга
    onChange: (value: number) => void; // Функция для обработки изменения рейтинга
    disabled?: boolean
}

const StarRating: React.FC<StarRatingProps> = ({ value, onChange, disabled }) => {
    const stars = Array.from({ length: 5 }); // Генерируем массив из 5 элементов

    return (
        <div
            className="flex items-center gap-1" // Центрируем звезды и добавляем промежуток
            role="radiogroup"
            aria-label="Rating selector"
        >
            {stars.map((_, index) => (
                <button
                    type='button'
                    disabled = {disabled}
                    key={index}
                    onClick={() => onChange(index + 1)}
                    className={`flex items-center transition-colors ${
                        index < value ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                    style={{ cursor: 'pointer' }}
                    aria-label={`Rate ${index + 1} stars`}
                    title={`Rate ${index + 1} stars`}
                >
                    <Star className="h-6 w-6" />
                </button>
            ))}
        </div>
    );
};

export default StarRating;