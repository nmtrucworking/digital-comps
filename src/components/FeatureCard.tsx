import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  title: string
  description: string
  icon: LucideIcon
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-stone-300 bg-white/90 p-6 shadow-sm backdrop-blur">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-stone-900">{title}</h3>
      <p className="text-sm leading-6 text-stone-600">{description}</p>
    </article>
  )
}
