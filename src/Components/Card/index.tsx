import { useContext } from "react";
import { HomeContext } from "../../Utils/contexts";
const Card = () => {
    const { currentData } = useContext(HomeContext);

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
            </div>
        </section>
    )
}

export default Card;