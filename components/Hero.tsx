export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
          빛나는 별 심리상담센터
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          마음의 회복과 성장을 함께 걷는 공간입니다.<br />
          부산 북구 화명동에서 여러분을 기다립니다.
        </p>
        <a
          href="#contact"
          className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition duration-300"
        >
          상담 문의하기
        </a>
      </div>
    </section>
  )
}
