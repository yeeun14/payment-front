import React from "react";

const CardItem = ({ cards, checked, cardCheck }) => {
    return (
        <div className="flex justify-center p-2 mb-3 rounded-md ">
            {cards?.map((card) => (
                <div
                    key={card.id}
                    className="p-2 rounded-md mr-5 outline outline-2 bg-gradient-to-r from-green-300 to-teal-600"
                >
                    <div className="grid grid-rows-2 bg-gradient-to-r from-green-300 to-teal-600">
                        <input
                            className="w-5 h-5 text-green-700 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            type="radio"
                            id={card.id}
                            checked={checked === card.id}
                            value={card.id}
                            onChange={() => cardCheck(card.id)}
                        />
                        <input
                            className="mb-5 text-xl font-bold text-center text-white bg-gradient-to-r from-green-300 to-teal-600"
                            type="text"
                            readOnly
                            value={card.cardNo}
                        />

                        <input
                            className="mb-5 text-xl font-bold text-center text-white bg-gradient-to-r from-green-300 to-teal-600"
                            type="text"
                            readOnly
                            value={card.cardName}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardItem;
