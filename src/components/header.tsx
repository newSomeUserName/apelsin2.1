import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full justify-center bg-[#FFE783] px-2 rounded-xl py-4 flex items-center">

      {/* Лого */}
      <div className="flex items-center gap-3">
        <Image
  src="./logo.png"
  alt="Апельсин"
  width={80}
  height={80}
  className="object-contain w-[80px] h-[80px]"
/>
      </div>

      <div className="text-[#013D10] font-bold leading-tight flex flex-col items-center">

        <h1 className="md:text-xl text-[14px] text-center w-fit">
          МЕЖДУНАРОДНЫЙ
          ОНЛАЙН-ЦЕНТР<br />
          РАЗВИТИЯ РЕЧИ ДЛЯ БИЛИНГВОВ<br />
          «АПЕЛЬСИН»<br />

        </h1>

      </div>
    </header>
  );
}