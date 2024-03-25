export const preferences = [
  {
    slug: 'howDrink',
    name: 'Preferences',
    title: 'How do you drink your coffee?',
    options: [
      {
        name: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers'
      },
      {
        name: 'Filter',
        description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
      },
      {
        name: 'Espresso',
        description: 'Dense and finely ground beans for an intense, flavorful experience'
      }
    ]
  },
  {
    slug: 'beanType',
    name: 'Bean Type',
    title: 'What type of coffee?',
    options: [
      {
        name: 'Single Origin',
        description: 'Distinct, high quality coffee from a specific family-owned farm'
      },
      {
        name: 'Decaf',
        description: 'Just like regular coffee, except the caffeine has been removed'
      },
      {
        name: 'Blended',
        description: 'Combination of two or three dark roasted beans of organic coffees'
      }
    ]
  },
  {
    slug: 'quantity',
    name: 'Quantity',
    title: 'How much would you like?',
    options: [
      {
        name: '250g',
        description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
      },
      {
        name: '500g',
        description: 'Perfect option for a couple. Yields about 40 delectable cups.'
      },
      {
        name: '1000g',
        description: 'Perfect for offices and events. Yields about 90 delightful cups.'
      }
    ]
  },
  {
    slug: 'grindOption',
    name: 'Grind Option',
    title: 'Want us to grind them?',
    options: [
      {
        name: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience'
      },
      {
        name: 'Filter',
        description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
      },
      {
        name: 'Cafetiére',
        description: 'Course ground beans specially suited for french press coffee'
      }
    ]
  },
  {
    slug: 'deliveries',
    name: 'Deliveries',
    title: 'How often should we deliver?',
    options: [
      {
        name: 'Every week',
        prices: {
          '250g': 7.2,
          '500g': 13.0,
          '1000g': 22.0
        },
        multiplier: 4,
        description: 'Includes free first-class shipping.'
      },
      {
        name: 'Every 2 weeks',
        prices: {
          '250g': 9.6,
          '500g': 17.5,
          '1000g': 32.0
        },
        multiplier: 2,
        description: 'Includes free priority shipping.'
      },
      {
        name: 'Every month',
        prices: {
          '250g': 12.0,
          '500g': 22.0,
          '1000g': 42.0
        },
        multiplier: 1,
        description: 'Includes free priority shipping.'
      }
    ]
  }
]
