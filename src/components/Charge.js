import React from "react";
import Modal from "../utils/Modal";

const Charge = () => {
    return (
        <section>
            <div className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0">
                <div className="w-1/4">
                    <div className="mb-5 flex">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead>
                            <tr>
                                <th>시작일시</th>
                            </tr>
                            <tr>
                                <th>종료일시</th>
                            </tr>
                            <tr>
                                <th>충전시간</th>
                            </tr>
                            <tr>
                                <th>충전량</th>
                            </tr>
                            <tr>
                                <th>최종 결제 금액</th>
                            </tr>
                            </thead>
                        </table>
                        <table className="w-full text-sm text-right text-gray-500">
                            <tbody>
                            <tr>
                                <td>2023-03-12 13:32</td>
                            </tr>
                            <tr>
                                <td>2023-03-12 14:02</td>
                            </tr>
                            <tr>
                                <td>0시간 30분</td>
                            </tr>
                            <tr>
                                <td>0.5KWH</td>
                            </tr>
                            <tr>
                                <td>1,000원</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Modal />
                </div>
            </div>
        </section>
    );
};

export default Charge;
