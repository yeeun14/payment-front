import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState({
        card1: "",
        card2: "",
        card3: "",
        card4: "",
        yy: "",
        mm: "",
        birth: "",
        password: "",
    });

    const { card1, card2, card3, card4, yy, mm, birth, password } = number;

    const [resultCode, setResultCode] = useState();

    // useState에서 setter는 비동식 방식으로 처리되기 때문에 반영이 제대로 되지 않을 수 있다.
    useEffect(() => {
        console.log(resultCode);
        const handleResult = () => {
            if (resultCode === undefined) {
            } else if (resultCode === "F100") {
                alert("카드를 등록했습니다.");
                navigate("/payment");
            } else {
                alert("카드등록에 실패했습니다.  " + resultCode);
            }
        };
        handleResult();
    }, [resultCode, navigate]);

    const onChangeNumber = (e) => {
        const nextForm = {
            ...number,
            [e.target.name]: e.target.value,
        };
        setNumber(nextForm);
    };

    const cardRegister = async () => {
        try {
            await axios
                .post("/payment/cardregister", number)
                .then((res) =>
                setResultCode(res.data.resultCode));
        } catch (error) {
            console.error(error);
        }
    };

    const changeNumber = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        var code = e.keyCode;
        if (
            (code > 47 && code < 58) ||
            e.ctrlKey ||
            e.altKey ||
            code === 8 ||
            code === 9 ||
            code === 46
        ) {
            return;
        }
        e.preventDefault();
        return false;
    };

    return (
        <section>
            <h2 className="font-bold text-xl mt-2">카드 등록</h2>
            <div className="grid grid-rows-4 grid-flow-col gap-10 mt-10">
                <div className="flex justify-start ml-2">
                    <input
                        className="outline outline-2 py-1 mr-2 rounded shadow hover:shadow-lg"
                        type="text"
                        onChange={onChangeNumber}
                        value={card1}
                        name="card1"
                        maxLength="4"
                        onInput={changeNumber}
                    />
                    <input
                        className="outline outline-2 py-1 mr-2 rounded shadow hover:shadow-lg"
                        type="text"
                        onChange={onChangeNumber}
                        value={card2}
                        name="card2"
                        maxLength="4"
                        onInput={changeNumber}
                    />
                    <input
                        className="outline outline-2 py-1 mr-2 rounded shadow hover:shadow-lg"
                        type="text"
                        onChange={onChangeNumber}
                        value={card3}
                        name="card3"
                        maxLength="4"
                        onInput={changeNumber}
                    />
                    <input
                        className="outline outline-2 py-1 mr-2 rounded shadow hover:shadow-lg"
                        type="text"
                        onChange={onChangeNumber}
                        value={card4}
                        name="card4"
                        maxLength="4"
                        onInput={changeNumber}
                    />
                </div>
                <div className="flex justify-start ml-2">
                    <input
                        className="outline outline-2 py-1 mr-2 rounded shadow hover:shadow-lg"
                        type="text"
                        onChange={onChangeNumber}
                        value={mm}
                        name="mm"
                        maxLength="2"
                        onInput={changeNumber}
                    />
                    <input
                        className="outline outline-2 py-1 rounded shadow hover:shadow-lg"
                        type="text"
                        onChange={onChangeNumber}
                        value={yy}
                        name="yy"
                        maxLength="2"
                        onInput={changeNumber}
                    />
                </div>
                <div className="flex justify-start ml-2">
                    <input
                        className="outline outline-2 py-1 rounded shadow hover:shadow-lg"
                        type="text"
                        onChange={onChangeNumber}
                        value={birth}
                        name="birth"
                        maxLength="10"
                        onInput={changeNumber}
                    />
                </div>
                <div className="flex justify-start ml-2">
                    <input
                        className="outline outline-2 py-1 rounded shadow hover:shadow-lg"
                        type="password"
                        onChange={onChangeNumber}
                        value={password}
                        name="password"
                        maxLength="2"
                        onInput={changeNumber}
                    />
                </div>
                <div>
                    <h2>카드번호</h2>
                </div>
                <div>
                    <h2>유효기간 MM/YY</h2>
                </div>
                <div>
                    <h2>생년월일 6자리</h2>
                </div>
                <div>
                    <h2>비밀번호 앞 2자리</h2>
                </div>
            </div>
            <div className="justify-center mt-20">
                <button
                    className="bg-green-700 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={cardRegister}
                >
                    카드 등록하기
                </button>
            </div>
        </section>
    );
};

export default Card;
