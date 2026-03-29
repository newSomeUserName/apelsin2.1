import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="w-full overflow-hidden">

            <div className="bottom-0 w-full  py-6 px-4 text-center">

                <p className="text-gray-800 text-lg mb-2">
                    на базе детского клуба в Токио
                </p>

                <h2 className="text-2xl font-bold mb-2">
                    Для детей 4 - 12 лет
                </h2>

                <p className="text-gray-800 text-lg">
                    Помогаем детям-билингвам
                </p>
                <p className="text-gray-800 text-lg">

                    говорить, читать и думать на русском 
                    <span>— живя за границей!</span>

                </p>

            </div>
        </section>
    );
}