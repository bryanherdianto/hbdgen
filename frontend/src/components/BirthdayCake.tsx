import React from "react";

const BirthdayCake: React.FC = () => {
	const chocolateShadow = `
        0 2px 0px #5e4315, 0 4px 0px #422f0f, 0 6px 0px #412e0f, 0 8px 0px #402d0e, 
        0 10px 0px #3f2c0e, 0 12px 0px #3e2c0e, 0 14px 0px #3d2b0e, 0 16px 0px #3c2a0d, 
        0 18px 0px #3b2a0d, 0 20px 0px #3a290d, 0 22px 0px #39280d, 0 24px 0px #38280c, 
        0 26px 0px #37270c, 0 28px 0px #36260c, 0 30px 0px #35260c
    `;

	return (
		<div className="relative w-[250px] h-[200px] mt-[-50px] mb-[80px] ml-[-125px] top-1/2 left-1/2">
			<style>
				{`
                    @keyframes flicker {
                    0%, 100% { transform: skewX(5deg); box-shadow: 0 0 10px rgba(255,165,0,0.2), 0 0 20px rgba(255,165,0,0.2); }
                    25% { transform: skewX(-5deg); box-shadow: 0 0 10px rgba(255,165,0,0.5), 0 0 20px rgba(255,165,0,0.5); }
                    50% { transform: skewX(10deg); box-shadow: 0 0 10px rgba(255,165,0,0.3), 0 0 20px rgba(255,165,0,0.3); }
                    75% { transform: skewX(-10deg); box-shadow: 0 0 10px rgba(255,165,0,0.4), 0 0 20px rgba(255,165,0,0.4); }
                    }
                    .animate-flicker { animation: flicker 1s ease-in-out alternate infinite; }
                `}
			</style>

			{/* Plate */}
			<div className="absolute w-[270px] h-[110px] bottom-[-10px] left-[-10px] bg-[#ccc] rounded-[50%] shadow-[0_2px_0_#b3b3b3,0_4px_0_#b3b3b3,0_5px_40px_rgba(0,0,0,0.5)]"></div>

			{/* Layers */}
			<div
				className="absolute w-[250px] h-[100px] rounded-[50%] bg-[#553c13] top-[66px]"
				style={{ boxShadow: chocolateShadow }}
			></div>
			<div
				className="absolute w-[250px] h-[100px] rounded-[50%] bg-[#553c13] top-[33px]"
				style={{ boxShadow: chocolateShadow }}
			></div>
			<div
				className="absolute w-[250px] h-[100px] rounded-[50%] bg-[#553c13] top-0"
				style={{ boxShadow: chocolateShadow }}
			></div>

			{/* Icing */}
			<div className="absolute top-[2px] left-[5px] bg-[#f0e4d0] w-[240px] h-[90px] rounded-[50%] before:content-[''] before:absolute before:inset-[4px_5px_6px_5px] before:bg-[#f5ecd9] before:rounded-[50%] before:shadow-[0_0_4px_#f7f0e1] before:z-10"></div>

			{/* Drips */}
			<div className="absolute top-[53px] left-[5px] w-[40px] h-[48px] bg-[#f0e4d0] rounded-bl-[25px] rounded-br-[25px] skew-y-[15deg]"></div>
			<div className="absolute top-[69px] left-[181px] w-[50px] h-[60px] bg-[#f0e4d0] rounded-bl-[25px] rounded-br-[25px] -skew-y-[15deg]"></div>
			<div className="absolute top-[54px] left-[90px] w-[80px] h-[60px] bg-[#f0e4d0] rounded-bl-[40px] rounded-br-[40px]"></div>

			{/* Candle */}
			<div className="absolute w-[16px] h-[50px] bg-[#7B020B] rounded-[8px/4px] top-[-20px] left-1/2 ml-[-8px] z-20 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[8px] before:rounded-[50%] before:bg-[#a3030e]">
				<div className="absolute w-[15px] h-[35px] bg-orange-500 rounded-[10px_10px_10px_10px/25px_25px_10px_10px] top-[-34px] left-1/2 ml-[-7.5px] z-10 origin-[50%_90%] animate-flicker"></div>
			</div>
		</div>
	);
};

export default BirthdayCake;
