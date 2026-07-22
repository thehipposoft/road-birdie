"use client"

import { useState } from 'react'

type FaqItemData = {
  id: string
  question: string
  answer: string
}

const FAQS: FaqItemData[] = [
  {
    id: 'equipment',
    question: "What's included in the camper rental?",
    answer:
      'Each Road Birdie camper comes fully equipped with bedding, kitchen essentials, camping gear, storage space, and everything you need for a comfortable road trip across Australia.',
  },
  { id: 'travel',   question: 'Can I travel anywhere in Australia?',        answer: 'Each Road Birdie camper comes fully equipped with bedding, kitchen essentials, camping gear, storage space, and everything you need for a comfortable road trip across Australia.' },
  { id: 'pickup',   question: 'Where can I pick up and return the camper?', answer: 'Each Road Birdie camper comes fully equipped with bedding, kitchen essentials, camping gear, storage space, and everything you need for a comfortable road trip across Australia.' },
  { id: 'roadside', question: 'Is roadside assistance included?',            answer: 'Each Road Birdie camper comes fully equipped with bedding, kitchen essentials, camping gear, storage space, and everything you need for a comfortable road trip across Australia.' },
  { id: 'pets',     question: 'Can I bring my pet?',                        answer: 'Each Road Birdie camper comes fully equipped with bedding, kitchen essentials, camping gear, storage space, and everything you need for a comfortable road trip across Australia.' },
  { id: 'period',   question: 'Is there a minimum rental period?',          answer: 'Each Road Birdie camper comes fully equipped with bedding, kitchen essentials, camping gear, storage space, and everything you need for a comfortable road trip across Australia.' },
  { id: 'why',      question: 'Why choose Road Birdie?',                    answer: 'Each Road Birdie camper comes fully equipped with bedding, kitchen essentials, camping gear, storage space, and everything you need for a comfortable road trip across Australia.' },
]

interface FaqItemProps extends FaqItemData {
  defaultOpen?: boolean
}

const FaqItem = ({ question, answer, defaultOpen = false }: FaqItemProps) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="py-5 border-b border-white/10 hover:bg-main-blue/20 duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-5 w-full text-left cursor-pointer"
      >
        {/* Ícono: dos líneas → cruz cerrada, superpuestas abiertas */}
        <div className="relative shrink-0 w-4 h-4">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/50 transition-transform duration-300 ease-out" />
          <span
            className={[
              'absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/50',
              'transition-transform duration-300 ease-out',
              open ? 'rotate-0' : 'rotate-90',
            ].join(' ')}
          />
        </div>

        <span className="font-ui text-base font-semibold text-white">{question}</span>
      </button>

      {/* Expansión animada con grid-rows */}
      <div
        className={[
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        ].join(' ')}
      >
        <div className="overflow-hidden min-h-0"
          onClick={() => setOpen(!open)}
        >
          {answer && (
            <p className="pt-3 pb-1 pl-9 font-body text-sm leading-relaxed text-white/60">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export const Faq = () => (
  <section className="w-full bg-main-navy py-20" id='faqs'>
    <div className="max-w-[1200px] mx-auto px-6">

      <h2 className="font-display text-7xl text-main-yellow font-extrabold">FAQs</h2>

      <div className="mt-12 grid lg:grid-cols-2 gap-x-16">
        <div>
          {FAQS.slice(0, 3).map((faq, i) => (
            <FaqItem key={faq.id} {...faq} defaultOpen={i === 0} />
          ))}
        </div>
        <div>
          {FAQS.slice(3).map((faq) => (
            <FaqItem key={faq.id} {...faq} />
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-1">
        <div className="h-1 w-full bg-main-blue" />
        <div className="h-1 w-full bg-main-yellow" />
        <div className="h-1 w-full bg-main-blue" />
      </div>

    </div>
  </section>
)
