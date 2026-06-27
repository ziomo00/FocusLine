function NowInFocus(){
    const value = 49;
    return(
        <article className="min-h-[270px] overflow-hidden rounded-[28px] border border-white/65 bg-focus-card p-6 text-[#171726] shadow-card">
          <p className="mb-2 text-sm font-bold tracking-wide text-muted">СЕЙЧАС В ФОКУСЕ</p>
          <h2 className="text-4xl font-[900] leading-tight tracking-[-0.055em]">Запустить MVP<br />FocusLine</h2>
          
          <div className="my-8 flex items-center gap-4">
            <div className="h-[15px] flex-1 overflow-hidden rounded-full bg-[#e7e7ef] shadow-[inset_0_2px_5px_rgba(23,23,38,0.08)]">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-500"
                style={{
                        width: `${value}%`
                }}
              />
            </div>
            <span className="text-[34px] font-[850] tracking-[-0.05em]">
                {value}%
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[18px] border border-[#ececf5] bg-white p-4">
              <p className="mb-2 text-sm text-muted">Следующий шаг</p>
              <strong>Экран задач</strong>
            </div>
            <div className="rounded-[18px] border border-[#ececf5] bg-white p-4">
              <p className="mb-2 text-sm text-muted">Дедлайн</p>
              <strong>20 июня</strong>
            </div>
            <div className="rounded-[18px] border border-[#ececf5] bg-white p-4">
              <p className="mb-2 text-sm text-muted">Осталось</p>
              <strong>12 задач</strong>
            </div>
          </div>
        </article>
    )
}
export default NowInFocus;