import Navbar from "./components/home/Navbar";
import Calendar from "./components/home/Calendar";
import NowInFocus from "./components/home/NowInFocus"
import Today from "./components/home/Today";
import Session from "./components/home/Session";
import Focus from "./components/home/Focus";

const pageBackground = {
  background:
    "radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.16), transparent 26%), radial-gradient(circle at 84% 12%, rgba(118, 196, 255, 0.24), transparent 24%), linear-gradient(135deg, #8a43d6, #3347d9)",
};

function App() {

  return (
  <main
      className="min-h-screen px-7 py-7 text-white"
      style={pageBackground}
    >
      <Navbar />
      <section className="mx-auto max-w-7xl py-12 grid grid-cols-[1.37fr_0.65fr] ">
        <div>
          <p>Доброе утро, Денис</p>
          <h1 className="text-4xl font-[1000]">
            Держи фокус,<br />
            Двигай линию</h1>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 px-6 shadow-[0_18px_45px_rgba(23,23,38,0.14)] backdrop-blur-[18px]">
            На сегодня запланировано 3 лавных шага.<br/>
            Отличнный день, чтобы закрыть все дедлайны.
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
    </main>
)
}

export default App;