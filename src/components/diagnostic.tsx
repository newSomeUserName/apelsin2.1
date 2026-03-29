export default function DiagnosticPage() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-green-700 text-lg sm:text-2xl lg:text-3xl font-semibold">
          ДИАГНОСТИКА РЕЧИ
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-gray-800 text-sm sm:text-base lg:text-lg">
          ЗА <span className="font-bold">20</span> МИНУТ ВЫ УЗНАЕТЕ:
        </p>

        {/* List */}
        <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-left max-w-md mx-auto text-gray-800 text-sm sm:text-2xl">
          {[
            "УРОВЕНЬ РУССКОГО ЯЗЫКА РЕБЕНКА",
            "ПОЧЕМУ ОН НЕ ГОВОРИТ ИЛИ ОТВЕЧАЕТ НА ДРУГОМ ЯЗЫКЕ",
            "РЕКОМЕНДАЦИИ ПО РАЗВИТИЮ РЕЧИ",
            "КАКОЙ ФОРМАТ ЗАНЯТИЙ ПОДОЙДЕТ РЕБЕНКУ",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-orange-500 text-4xl ">•</span>
              <span className="mt-2">{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}