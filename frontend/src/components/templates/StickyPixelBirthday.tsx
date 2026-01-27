import { motion } from 'motion/react';
import { ReactNode } from 'react';

const cards = [
    {
        id: 1,
        color: 'bg-blue-600',
        title: 'Hey You!',
        message: 'Stop scrolling for a sec...',
        textColor: 'text-blue-100'
    },
    {
        id: 2,
        color: 'bg-purple-600',
        title: 'Special Day',
        message: 'I heard something special is happening.',
        textColor: 'text-purple-100'
    },
    {
        id: 3,
        color: 'bg-amber-600',
        title: 'Almost there...',
        message: 'Just one more swipe.',
        textColor: 'text-amber-100'
    }
];

interface CardData {
    id: number | string;
    color: string;
    title: string;
    message: string;
    textColor?: string;
    component?: ReactNode;
}

interface CardProps {
    card: CardData;
    index: number;
}

const FINAL_CARD: CardData = {
    id: 'final-cake-card',
    color: 'bg-rose-600',
    title: 'Happy Birthday!',
    message: 'Wishing you all the best.',
    textColor: 'text-rose-100',
    component: <div className="cake" id="cake"></div>
};

const Card = ({ card }: CardProps) => {
    return (
        <div className="h-screen w-full snap-start snap-always relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    className={`relative w-full h-full flex flex-col items-center shadow-2xl ${card.color} ${card.component ? 'justify-start pt-6' : 'justify-center'
                        }`}
                >
                    <div className="text-center px-10 max-w-4xl z-10">
                        <h2 className={`text-6xl md:text-8xl font-bold font-pixelify-sans mb-8 ${card.textColor || 'text-white'}`}>
                            {card.title}
                        </h2>
                        <p className={`text-4xl md:text-6xl font-pixelify-sans opacity-90 leading-tight ${card.textColor || 'text-white'}`}>
                            {card.message}
                        </p>
                    </div>
                    {card.component}
                </motion.div>
            </div>
        </div>
    );
};

export default function StickyPixel({ userCards = cards }: { userCards?: CardData[] }) {
    const allCards = [...userCards, FINAL_CARD];

    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {allCards.map((card, i) => {
                return (
                    <Card
                        key={card.id}
                        index={i}
                        card={card}
                    />
                );
            })}
        </div>
    );
}