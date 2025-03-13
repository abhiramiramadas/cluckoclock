
# 🥚 Cluck O'Clock - Egg Timer

*Eggsactly on time*

## Overview

Cluck O'Clock is a cute, interactive egg timer web application built with Next.js and Tailwind CSS. It helps you cook the perfect egg by providing preset timers for different egg consistencies.

 ![image](https://github.com/user-attachments/assets/71fff2b3-a9c7-4c2a-aced-ba1e5e6228da)

## Features

- 🥚 Adorable egg-themed UI with playful animations
- 🍳 Four preset egg cooking options:
  - Soft (3 minutes)
  - Medium (5 minutes)
  - Hard (7 minutes)
  - Extra Hard (9 minutes)
- ⏱️ Visual countdown timer
- 🔔 Alert notification when your egg is ready
- 📱 Responsive design that works on mobile and desktop

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cluck-o-clock.git
   cd cluck-o-clock
Thought for 1 second```markdown project="CluckOClock" file="README.md"
...
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## How to Use

1. Click on the egg to reveal the cooking options
2. Select your desired egg consistency (Soft, Medium, Hard, or Extra Hard)
3. Watch the timer count down with a cute bouncing egg animation
4. When the timer reaches zero, you'll receive an alert that your egg is ready
5. Click "Stop" at any time to cancel the timer


## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/), the platform built by the creators of Next.js.

```shellscript
npm install -g vercel
vercel
```

## Customization

You can customize the timer durations by modifying the `eggTypes` array in `app/cluck-o-clock.tsx`:

```typescript
const eggTypes = [
  { name: 'Soft', time: 180, emoji: '🥚' },  // 3 minutes in seconds
  { name: 'Medium', time: 300, emoji: '🍳' }, // 5 minutes in seconds
  { name: 'Hard', time: 420, emoji: '🐣' },   // 7 minutes in seconds
  { name: 'Extra Hard', time: 540, emoji: '🐥' } // 9 minutes in seconds
]
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Egg cooking times based on general culinary recommendations
- Emoji graphics provided by standard Unicode emoji set
- Font "Caveat" from Google Fonts


---

Made with 💛 and 🥚

```plaintext

This README provides a comprehensive overview of your Cluck O'Clock egg timer project. It includes:

1. A brief introduction and screenshot
2. Key features
3. Technologies used
4. Installation and setup instructions
5. Usage guide
6. Deployment information
7. Customization options
8. Contributing guidelines
9. License information
10. Acknowledgements

Feel free to adjust any details to better match your specific implementation or preferences. You might also want to add a real screenshot or GIF of your application in action once it's fully styled and deployed.
```
