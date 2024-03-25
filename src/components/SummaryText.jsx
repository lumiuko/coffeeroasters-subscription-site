import SummaryOption from './SummaryOption'

export default function SummaryText({ settings }) {
  return (
    <p className="font-serif font-black text-h4 leading-10">
      “I drink my coffee {settings.howDrink?.name === 'Capsule' ? 'using' : 'as'} <SummaryOption value={settings.howDrink?.name} />, with a{' '}
      <SummaryOption value={settings.beanType?.name} /> type of bean. <SummaryOption value={settings.quantity?.name} />
      {settings.howDrink?.name !== 'Capsule' && (
        <>
          <span> ground ala</span> <SummaryOption value={settings.grindOption?.name} />
        </>
      )}
      , sent to me <SummaryOption value={settings.deliveries?.name} />
      .”
    </p>
  )
}
