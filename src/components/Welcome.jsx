import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="relative max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md overflow-hidden min-h-[500px] flex flex-col justify-end">

            {/* Floating numbered circles at the top */}
            <div className="absolute inset-0">
                {[...Array(9)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black shadow animate-bubble"
                        style={{
                            top: `${20 + i * 40}px`,
                            left: `${20 + (i % 3) * 60}px`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${6 + i}s`, // vary duration for natural effect
                        }}
                    >
                        {i + 1}
                    </div>



                ))}
            </div>

            {/* Text + Buttons anchored at bottom */}
            <div className="z-10">
                <h2 className="text-xl font-semibold mb-2">Welcome to PopX</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>

                <button
                    className="w-full h-12 bg-purple-700 text-white rounded-lg mb-3 font-medium"
                    onClick={() => navigate("/create-account")}
                >
                    Create Account
                </button>
                <button
                    className="w-full h-12 bg-purple-300 text-black rounded-lg font-medium"
                    onClick={() => navigate("/login")}
                >
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
}

export default Welcome;