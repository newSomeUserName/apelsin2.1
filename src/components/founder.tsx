export default function Founder() {
    return (
        <section className="py-12 sm:py-16 px-4">
            <div className="max-w-md mx-auto text-center flex flex-col gap-20">

                <div>
                    <p className="text-gray-700 text-xs sm:text-sm tracking-wide">
                        РУКОВОДИТЕЛЬ ЦЕНТРА «АПЕЛЬСИН»
                    </p>

                    <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                        ОЛЬГА НАКАТА
                    </h2>
                </div>


                <div className="relative">

                    <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                        <div className="rounded-full  p-1 bg-green-700">
                            <img
                                src="./glava.jpg"
                                alt="Ольга Наката"
                                className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <div className="bg-[#FD9001] text-white rounded-2xl px-5 sm:px-6 pt-22 pb-6 text-sm sm:text-2xl leading-relaxed sm:pt-24">
                        <p>
                            ЦЕНТР ВЫРОС ИЗ ДЕТСКОГО КЛУБА В ТОКИО, КУДА ОБРАЩАЛИСЬ РОДИТЕЛИ
                            ДЕТЕЙ-БИЛИНГВОВ, КОТОРЫЕ ПОНИМАЛИ РУССКИЙ ЯЗЫК, НО НЕ ГОВОРИЛИ НА НЕМ.
                        </p>

                        <p className="mt-4">
                            УЖЕ 6 ЛЕТ МЫ ПРОВОДИМ ОНЛАЙН-ЗАНЯТИЯ ДЛЯ ДЕТЕЙ ИЗ РАЗНЫХ СТРАН МИРА.
                        </p>

                        <p className="mt-4">
                            БОЛЕЕ 100 ДЕТЕЙ ИЗ ЯПОНИИ, КОРЕИ, КИТАЯ, США, ТУРЦИИ, БРАЗИЛИИ И
                            МЕКСИКИ УЖЕ ЗАНИМАЮТСЯ У НАС.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}