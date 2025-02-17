import { useContext } from "react";
import { HomeContext } from "../../Utils/contexts";
import { exprenses } from "../../Utils/types";
import DeleteIcon from '../../assets/delete.png';

const Card = () => {
    const context = useContext(HomeContext);
    const { currentData } = context;
    return (
        <section className="card_root pt-4 px-4">
            <div className="card_content">
                <div className="welcome_container text-3xl font-semibold flex gap-2 items-center font-mono">
                        <p>Welcome to <span className="q_b_text">Q</span>uick <span className="q_b_text">B</span>udget,</p>
                        <p className="text-4xl monospce font-semibold">{currentData?.name}!</p>
                </div>
                <div className="form_container_home w-full flex justify-center pt-10 gap-[1px]">
                    <input placeholder="Amount" min={0} className="w-[250px] h-[40px] bg-[#FFF] rounded-md text-[#000] font-bold px-2 border-2 border-[#EEE5E5] border-solid " type="number" />
                    <input placeholder="Description" className="w-[250px] h-[40px] bg-[#FFF] rounded-md text-[#000] font-[500] px-2 border-2 border-[#EEE5E5] border-solid " type="text" />
                    <select className="w-[250px] h-[40px] bg-[#FFF] rounded-md text-[#000] font-bold px-2 border-2 border-[#EEE5E5] border-solid ">
                        <option value="DEBIT">DEBIT</option>
                        <option value="CREDIT">CREDIT</option>
                    </select>
                    <button className="q_b_clasic_add">ADD</button>
                </div>
                <div className="table_container p-3">
                    <table border={1} className="w-full">
                        <thead>
                            <tr className="w-full flex items-center justify-between px-4">
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="w-full flex flex-col gap-5">
                            {
                                currentData?.exprenses?.map((item: exprenses) => (
                                    <tr className="w-full flex justify-between px-4">
                                        <td>{item?.value}</td>
                                        <td>{item?.description?.slice(0, 11)}</td>
                                        <td>{item?.type}</td>
                                        <td><img className="w-6 h-6 cursor-pointer" src={DeleteIcon} alt="DeleteIcon" /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Card;