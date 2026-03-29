export default function SectionLevel() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Button */}
        <button className="bg-[#FD9001] text-white text-sm sm:text-base lg:text-lg font-medium px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-orange-600 transition">
          Проверить уровень русского
        </button>

        {/* Title */}
        <h2 className="mt-8 sm:mt-10 text-green-700 text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug">
          ЧЕМ МЫ МОЖЕМ ПОМОЧЬ?
        </h2>

        {/* List */}
        <ul className="mt-6 sm:mt-8 w-full max-w-md sm:max-w-lg text-left space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-base lg:text-lg">
          {[
            "РАСШИРИТЬ СЛОВАРНЫЙ ЗАПАС",
            "НАУЧИМ ЧИТАТЬ И ПИСАТЬ",
            "ОБЩЕНИЕ СО СВЕРСТНИКАМИ",
            "ПЕРЕСТАТЬ СТЕСНЯТЬСЯ РЕЧИ",
            "СОХРАНИМ РУССКИЙ ЯЗЫК ЗА ГРАНИЦЕЙ",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-orange-500 text-4xl">•</span>
              <span className="mt-2">{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}