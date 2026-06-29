export const Contact = () => (
  <section className="w-full flex flex-col items-center justify-center bg-main-blue min-h-screen lg:gap-32">
    <div className="relative bg-main-yellow h-1 w-full max-w-6xl" />
    <div className="flex flex-col items-center text-center gap-8">

      <p className="font-ui text-sm tracking-[0.4em] text-main-yellow">* * *</p>

      <h2 className="font-display text-[90px] leading-none tracking-tight text-main-yellow uppercase font-extrabold">
        Connect<br/> With Us,
      </h2>

      <p className="font-display text-4xl leading-tight text-main-yellow/80 max-w-lg">
        Every road story, every shared view, every fire under the stars{' '}
        <em>— they all connect us.</em>
      </p>

      <div className="flex items-center gap-5">
        <div className="w-10 h-10 rounded-full border-2 border-main-yellow/60" />
        <div className="w-10 h-10 rounded-full border-2 border-main-yellow/60" />
      </div>

    </div>
    <div className="relative bg-main-yellow h-1 w-full max-w-6xl" />
  </section>
)
