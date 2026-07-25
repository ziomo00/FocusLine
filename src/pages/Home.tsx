import NowInFocus from "../components/home/NowInFocus";
import Calendar from "../components/home/Calendar";
import Today from "../components/home/Today";
import Session from "../components/home/Session";
import Focus from "../components/home/Focus";

function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl py-12 grid grid-cols-[1.37fr_0.65fr] ">
        <div>
          <p>Доброе утро, Денис</p>
          <h1 className="text-4xl font-[1000]">
            Держи фокус,<br />
            Двигай линию
          </h1>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 px-6 shadow-[0_18px_45px_rgba(23,23,38,0.14)] backdrop-blur-[18px]">
          На сегодня запланировано 3 главных шага.<br/>
          Отличный день, чтобы закрыть все дедлайны.
        </div>
      </section>
      
      <section className="mx-auto max-w-7xl space-y-6">
        <div className="grid grid-cols-[1.42fr_0.82fr] gap-6">
          <NowInFocus />
          <Calendar/>
        </div>
        <div className="grid grid-cols-[1.42fr_0.60fr] gap-6">
          <Today />
          <Session />
        </div>
        <Focus />
      </section>
    </>
  );
}

export default Home;