import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";

const Payment = () => {
    const navigate = useNavigate();

    const [cards, setCards] = useState([]);
    const [checked, setChecked] = useState("");
    const payment = {
        id: checked,
        resultAmt: 100,
    };
    const [resultCode, setResultCode] = useState();
    const handleFilters = (check) => {
        setChecked(check);
    };

    useEffect(() => {
        async function cardList() {
            try {
                const res = await axios
                    .get("/payment/cardlist")
                    .then((res) => Array.from(res.data));
                const cardList = res.map((it) => {
                    return {
                        id: it.id,
                        cardName: it.cardName,
                        cardNo: it.cardNo,
                    };
                });
                console.log(cardList);
                setCards(cardList);
                setChecked(cardList[0].id);
            } catch (error) {
                console.error(error);
            }
        }
        cardList();
    }, []);

    useEffect(() => {
        console.log(resultCode);
        const handleResult = () => {
            if (resultCode === undefined) {
            } else if (resultCode === "3001") {
                alert("결제가 완료됐습니다.");
            } else {
                alert("결제에 실패했습니다.  " + resultCode);
            }
        };
        handleResult();
    }, [resultCode]);

    const handlePayment = async () => {
        try {
            console.log(payment);
            const res = await axios
                .post("/payment/charge", payment)
                .then((res) => setResultCode(res.data.resultCode));
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="grid grid-rows-2 mt-100">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 mt-10">
                <CardItem
                    cards={cards}
                    checked={checked}
                    cardCheck={(check) => handleFilters(check)}
                />
            </div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 mt-10">
                <button
                    className="bg-green-700 text-white active:bg-green-600 font-bold text-sm px-6 py-3 mr-3 rounded hover:shadow-lg"
                    onClick={() => navigate("/card")}
                >
                    카드 등록하기
                </button>
                <button
                    className="bg-green-700 text-white active:bg-green-600 font-bold text-sm px-10 py-3 rounded hover:shadow-lg"
                    onClick={handlePayment}
                >
                    결제하기
                </button>
            </div>
        </section>
    );
};

Payment.defaultProps = {
    cards: [],
};

export default Payment;
