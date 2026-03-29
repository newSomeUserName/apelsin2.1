export default function WhyUs() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        

        <h2 className="text-green-700 text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug">
          ПОЧЕМУ РОДИТЕЛИ ВЫБИРАЮТ НАС?
        </h2>

        <ul className="mt-6 sm:mt-8 w-full max-w-md sm:max-w-lg text-left space-y-4 sm:space-y-5 text-gray-800 text-sm sm:text-base lg:text-lg">
          {[
            "10 лет опыта работы с билингвами",
            "Мини-группы до 4 детей",
            "Занятия полностью на русском языке",
            "Игровой формат, детям интересно говорить на русском языке",
            "Удобное время для детей из разных часовых поясов",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-amber-200 text-lg mt-1">✔</span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>

       
        <button className="mt-8 sm:mt-10 bg-[#FD9001] text-white text-sm sm:text-base lg:text-lg font-medium px-6 sm:px-8 py-3 rounded-full hover:bg-orange-600 transition">
          Пройти бесплатную диагностику
        </button>

      </div>
    </section>
  );
}