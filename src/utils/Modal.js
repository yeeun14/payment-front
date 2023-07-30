import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    const navgate = useNavigate();
    const movePayment = () => {
        setShowModal(false);
        navgate("/payment");
    };
    return (
        <>
            <button
                className="bg-green-700 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                type="button"
                onClick={() => setShowModal(true)}
            >
                충전완료
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h2 className="text-2xl font-semibold">
                                        충전을 완료하였습니다.
                                        <br />
                                        아래 결제 내역을 확인하여 주세요.
                                    </h2>

                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-4 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <table className="w-full text-sm text-left text-gray-500'">
                                        <tbody>
                                        <tr>
                                            <th>시작일시</th>
                                            <td>2023-03-12 13:32</td>
                                        </tr>
                                        <tr>
                                            <th>종료일시</th>
                                            <td>2023-03-12 14:02</td>
                                        </tr>
                                        <tr>
                                            <th>충전시간</th>
                                            <td>0시간 30분</td>
                                        </tr>
                                        <tr>
                                            <th>충전량</th>
                                            <td>2KHW</td>
                                        </tr>
                                        <tr>
                                            <th>최종 결제 금액</th>
                                            <td>1,000원</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-green-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={movePayment}
                                    >
                                        결제하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
