'use client';

import { useState, useEffect, useRef, useLayoutEffect } from "react";

const testimonials = [

  {
    text: "Мы живём в Германии, и сын начал терять русский. За полгода занятий он стал уверенно строить предложения, пересказывать сказки и даже сочинять свои истории. Педагог находит подход — уроки проходят через игру, поэтому ребёнок каждый раз ждёт занятия с нетерпением. Очень рекомендую!",
    author: "Мама Артёма, 7 лет",
    tag: "развитие речи",
  },
  {
    text: "Дочка с рождения растёт в двуязычной среде. Мы переживали, что она путает языки и не сможет нормально говорить ни на одном. После трёх месяцев занятий она чётко разделяет языки и стала гораздо увереннее общаться по-русски. Спасибо педагогу за терпение и профессионализм!",
    author: "Мама Алисы, 5 лет",
    tag: "развитие речи",
  },
  {
    text: "Сын ходит на индивидуальные занятия уже 4 месяца. Раньше он стеснялся говорить по-русски, отвечал на все вопросы на английском. Сейчас сам инициирует разговоры на русском, задаёт вопросы, читает простые книжки. Прогресс видим каждую неделю.",
    author: "Папа Миши, 8 лет",
    tag: "развитие речи",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Measure full card height (content + padding + border)
  useLayoutEffect(() => {
    if (!cardRef.current) return;
    // Temporarily set height to auto to measure natural height
    cardRef.current.style.height = "auto";
    const naturalHeight = cardRef.current.offsetHeight;
    // If we already had a height, snap back to it so transition works
    if (cardHeight !== undefined) {
      cardRef.current.style.height = `${cardHeight}px`;
      // Force reflow
      cardRef.current.offsetHeight;
    }
    setCardHeight(naturalHeight);
  }, [current]);

  // Apply animated height after state update
  useEffect(() => {
    if (cardRef.current && cardHeight !== undefined) {
      cardRef.current.style.height = `${cardHeight}px`;
    }
  }, [cardHeight]);

  // Auto-rotate
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  // Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  const t = testimonials[current];

  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        <h2 className="text-green-700 text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide">
          Отзывы
        </h2>

        {/* Card */}
        <div
          ref={cardRef}
          className="p-5 sm:p-8 mt-6 sm:mt-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-[#FFE783] rounded-2xl sm:rounded-3xl  lg:p-10  overflow-hidden"
          style={{ transition: "height 0.5s ease" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className=" rounded-2xl bg-white p-5 sm:p-8 ">
            <p className="text-gray-800 text-sm sm:text-2xl text-left leading-relaxed sm:leading-7 lg:leading-8 ">
              {t.text}
            </p>
          </div>

          <div className="mt-5 sm:mt-7 ">
            <p className="text-green-700 text-base sm:text-lg lg:text-xl font-extrabold ">
              – {t.author}
            </p>
            <p className="text-xs sm:text-sm lg:text-base font-bold text-green-700 uppercase tracking-wider mt-0.5">
              ({t.tag})
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5 sm:mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Отзыв ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === current
                ? "w-6 bg-green-700"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        <button className="mt-8 sm:mt-10 bg-[#FD9001] text-white text-sm sm:text-base lg:text-lg font-medium px-6 sm:px-8 py-3 rounded-full hover:bg-green-800 transition">
          Записаться на диагностику
        </button>

      </div>
    </section>
  );
}
