import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import BirthdayCake from '../BirthdayCake';

const cards = [
    { id: 1, color: 'bg-blue-500', title: 'Card 1', message: 'Happy Birthday!' },
    { id: 2, color: 'bg-purple-500', title: 'Card 2', message: 'Wishing you all the best!' },
    { id: 3, color: 'bg-red-500', title: 'Card 3', message: 'Have a fantastic day!' },
    { id: 4, color: 'bg-green-500', title: 'Card 4', message: 'Cheers to you!' },
];

const Card = ({ card, index, targetScale }: any) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    const topOffset = index * 25; // 25px offset per card

    return (
        <div
            ref={container}
            className="h-[100vh] flex items-center justify-center sticky"
            style={{ top: `calc(5vh + ${topOffset}px)` }}
        >
            <motion.div
                style={{
                    scale,
                    rotate: index % 2 === 0 ? -5 : 5
                }}
                className={`relative w-[80vw] max-w-lg h-[500px] rounded-3xl p-10 origin-top border border-white/20 shadow-2xl ${card.color}`}
            >
                <h2 className="text-4xl font-bold text-white font-caveat">{card.title}</h2>
                <div className="text-5xl mt-4 text-white/80 font-caveat">
                    {card.message}
                </div>
            </motion.div>
        </div>
    );
};

export default function CardStack() {
    return (
        <>
            <div className="min-h-screen pb-40">
                {cards.map((card, i) => {
                    const targetScale = 1 - (cards.length - i) * 0.05;
                    return (
                        <Card
                            key={card.id}
                            index={i}
                            card={card}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
            <div className='text-7xl font-bold font-caveat text-center pb-40'>
                Happy Birthday!
            </div>
            <BirthdayCake />
        </>
    );
}