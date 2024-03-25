/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-cyan': '#0E8784',
        'light-cyan': '#66D2CF',
        'dark-gray-blue': '#333D4B',
        'pale-orange': '#FDD6BA',
        'light-cream': '#FEFCF7',
        'light-gray': '#F4F1EB',
        'very-light-gray': '#E2DEDB',
        blue: '#2C343E',
        gray: '#83888F'
      },
      fontSize: {
        alternate: '9.375rem', // 150px
        h1: '4.5rem', // 72px
        h2: '2.5rem', // 40px
        h3: '2rem', // 32px
        h4: '1.5rem', // 24px
        body: '1rem', // 16px
        'body-2': '0.9375rem', // 15px
        small: '0.75rem' // 12px
      },
      lineHeight: {
        alternate: '4.5rem', // 72px
        h1: '4.5rem', // 72px
        h2: '3rem', // 48px
        h3: '2.25rem', // 36px
        h4: '2rem', // 32px
        body: '1.625rem', // 26px
        'body-2': '1.5625rem', // 25px
        small: '0.9375rem' // 15px
      }
    },
    letterSpacing: {
      wider: '1px'
    },
    backgroundImage: {
      'homepage-hero-mobile': 'url("/home/mobile/image-hero-coffeepress.jpg")',
      'homepage-hero-tablet': 'url("/home/tablet/image-hero-coffeepress.jpg")',
      'homepage-hero-desktop': 'url("/home/desktop/image-hero-coffeepress.jpg")',
      'about-hero-mobile': 'url("/about/mobile/image-hero-whitecup.jpg")',
      'about-hero-tablet': 'url("/about/tablet/image-hero-whitecup.jpg")',
      'about-hero-desktop': 'url("/about/desktop/image-hero-whitecup.jpg")',
      'about-quality-mobile': 'url("/about/mobile/bg-quality.png")',
      'about-quality-tablet': 'url("/about/tablet/bg-quality.png")',
      'about-quality-desktop': 'url("/about/desktop/bg-quality.png")',
      'plan-steps-mobile': 'url("/plan/mobile/bg-steps.png")',
      'plan-steps-tablet': 'url("/plan/tablet/bg-steps.png")',
      'plan-steps-desktop': 'url("/plan/desktop/bg-steps.png")',
      'plan-summary-mobile': 'url("/plan/mobile/bg-order-summary.png")',
      'plan-summary-tablet': 'url("/plan/tablet/bg-order-summary.png")',
      'plan-summary-desktop': 'url("/plan/desktop/bg-order-summary.png")'
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Fraunces', 'serif']
    }
  },
  plugins: []
}
