import Image from "next/image";

export default function ImageSection() {
    return (
        <section className="w-full">



            <div className="max-w-xl mx-auto flex flex-col  rounded-xl shadow-lg px-5 py-3 bg-[#FFE783] gap-6">

                <h3 className="text-2xl font-bold text-center text-[#00651D]">
                    ЗНАКОМО?
                </h3>

                <ul className="space-y-2 px-5 text-sm sm:text-2xl flex flex-col gap-3">
                    <li className="flex gap-3 items-start">
                        <div className="w-[5px] h-[5px] shrink-0 mt-2 bg-[#00651D] rounded-full"></div>
                        <span>
                            РЕБЁНОК ПОНИМАЕТ РУССКИЙ, НО ОТВЕЧАЕТ НА ЯЗЫКЕ СТРАНЫ
                        </span>
                    </li>
                    <li className="flex gap-3 items-center"> <div className="w-[5px] h-[5px] bg-[#00651D] rounded-full"></div> <span>СЛОВАРНЫЙ ЗАПАС МАЛЕНЬКИЙ</span>  </li>
                    <li className="flex gap-3 items-center"> <div className="w-[5px] h-[5px] bg-[#00651D] rounded-full"></div> <span>СТЕСНЯЕТСЯ ГОВОРИТЬ ПО-РУССКИ</span>  </li>
                    <li className="flex gap-3 items-center"> <div className="w-[5px] h-[5px] bg-[#00651D] rounded-full"></div> <span>РУССКИЕ КНИГИ НЕ ИНТЕРЕСНЫ</span>  </li>
                    <li className="flex gap-3 items-center"> <div className="w-[5px] h-[5px] bg-[#00651D] rounded-full"></div> <span>НЕТ РУССКОЯЗЫЧНОЙ СРЕДЫ</span>  </li>
                </ul>
                <div>
                    <h2 className="text-center flex flex-col">ЕСЛИ ВЫ УЗНАЛИ СВОЕГО РЕБЁНКА — <span className="font-bold text-[#00651D]">ВАЖНО НЕ ЖДАТЬ.</span>
                    </h2>
                </div>
            </div>

        </section>
    );
}