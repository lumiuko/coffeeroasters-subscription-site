import StepCard from './StepCard'

const steps = [
  {
    title: 'Pick your coffee',
    text: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
  },
  {
    title: 'Choose the frequency',
    text: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
  },
  {
    title: 'Receive and enjoy!',
    text: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
  }
]

export default function StepCards({ isHomepage }) {
  return (
    <div className="flex flex-col gap-14 md:flex-row md:gap-[0.625rem] xl:gap-24">
      {steps.map((step, index) => (
        <StepCard key={index} number={index + 1} title={step.title} text={step.text} isHomepage={isHomepage} />
      ))}
    </div>
  )
}
