export interface Testimonial {
  readonly cardName: string;
  readonly quote: string;
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
}

export interface TestimonialTicker {
  readonly name: string;
  readonly sectionClass: string;
  readonly ulClass: string;
  readonly testimonials: (Testimonial | null)[];
}

export const testimonialsData = {
  tickers: [
    {
      name: "Left Ticker",
      sectionClass: "[align-items:normal] box-content block h-auto list-disc max-h-none max-w-none opacity-100 w-auto md:[mask-image:linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] md:items-center md:aspect-auto md:box-border md:flex md:h-full md:justify-items-center md:list-none md:max-h-full md:max-w-full md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2.5 md:scroll-m-0 md:scroll-p-[auto]",
      ulClass: "static [align-items:normal] box-content gap-x-[normal] block flex-row h-auto max-h-none max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto pl-10 md:relative md:items-center md:aspect-auto md:box-border md:gap-x-8 md:flex md:flex-col md:h-full md:justify-items-center md:max-h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]",
      testimonials: [
        {
          cardName: "Desktop Testimonial Card 1",
          quote: "This app changed how I read. It finds the right content without me lifting a finger. I don't waste time anymore—just speak, and it delivers. Super intuitive and honestly addictive.",
          name: "Draco Washington",
          role: "Product Designer",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/wjz5X5w39pFJufed6tclHevfarY.png"
        },
        {
          cardName: "Desktop Testimonial Card 2",
          quote: "I just talk and boom—something relevant and surprisingly deep every time. It feels like the app really listens. The results are spot-on, never random. I highly recommend it\"",
          name: "Harry James",
          role: "College Student",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/fGMII2DZxHfMG5shcSEK1AnhYvw.png"
        },
        {
          cardName: "Desktop Testimonial Card 3",
          quote: "Finally, no more endless scrolling. It brings exactly what I want to read in seconds. I use it during work breaks to stay sharp without zoning out. The perfect mix of ease and intelligence.",
          name: "Harry James",
          role: "Software Engineer",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/z8HX4TxnpdwjkNU0ggAXymzcOg.jpg"
        },
        {
          cardName: "Desktop Testimonial Card 4",
          quote: "I love how it matches articles with my mood. It's like it actually gets me. Even on rough days, it recommends something that lifts me up. Way more personal than any app I've used.",
          name: "Chris Roman",
          role: "Copywriter",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/pEuH6A7oLEFb7FXtrQeRR85y8.png"
        }
      ]
    },
    {
      name: "Middle Ticker",
      sectionClass: "[align-items:normal] box-content block h-auto list-disc max-h-none max-w-none w-auto md:[mask-image:linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] md:items-center md:aspect-auto md:box-border md:flex md:h-full md:justify-items-center md:list-none md:max-h-full md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2.5 md:scroll-m-0 md:scroll-p-[auto]",
      ulClass: "static [align-items:normal] box-content gap-x-[normal] block flex-row h-auto max-h-none max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto pl-10 top-auto md:relative md:items-center md:aspect-auto md:box-border md:gap-x-8 md:flex md:flex-col md:h-full md:justify-items-center md:max-h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-2512px] md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]",
      testimonials: [
        {
          cardName: "Desktop Testimonial Card 5",
          quote: "Voice input makes everything so fast. I use it while I cook, walk, or just chill. It's hands-free, stress-free, and super smart. I can't imagine going back to typing searches.",
          name: "Jack Hammer",
          role: "UX Intern",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/I61QNxVc6uFejjoLGHJHnP1oE.jpg"
        },
        {
          cardName: "Desktop Testimonial Card 6",
          quote: "Simple design, no ads, and content that fits me better than any news app I've tried. It's clean, quick, and always relevant. I feel like it's made for people like me.",
          name: "Sheldon Nimoy",
          role: "Marketer",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/nSoxT2I1tjWrBHGXgDrJKSqN99w.png"
        },
        {
          cardName: "Desktop Testimonial Card 7",
          quote: "I discovered niche articles I'd never find on my own. It feels tailored and fresh. Even the summaries are surprisingly detailed. It's like having a personal content scout.",
          name: "Lara Cooper",
          role: "Content Creator",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/jkhqSIjKPCryk6IyE7etXBbHis4.png"
        },
        {
          cardName: "Desktop Testimonial Card 8",
          quote: "Sometimes I don't even know what I want to read. This app figures it out for me. It reads my tone and finds something that matches it. Every session feels effortless and curated.",
          name: "Duke Page",
          role: "Fitness Trainer",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/jKYaRrUffvKWAyq2Elqcr1i3cLU.jpg"
        },
        ...Array(8).fill(null)
      ]
    },
    {
      name: "Right Ticker",
      sectionClass: "[align-items:normal] box-content block h-auto list-disc max-h-none max-w-none w-auto md:[mask-image:linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] md:items-center md:aspect-auto md:box-border md:flex md:h-full md:justify-items-center md:list-none md:max-h-full md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2.5 md:scroll-m-0 md:scroll-p-[auto]",
      ulClass: "static [align-items:normal] box-content gap-x-[normal] block flex-row h-auto max-h-none max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto pl-10 md:relative md:items-center md:aspect-auto md:box-border md:gap-x-8 md:flex md:flex-col md:h-full md:justify-items-center md:max-h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]",
      testimonials: [
        {
          cardName: "Desktop Testimonial Card 9",
          quote: "It understands natural speech so well—it's like chatting with a smart, chill friend. There's no pressure to search the 'right' way. And the voice experience is buttery smooth.",
          name: "Penny Potter",
          role: "Data Analyst",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/9udeXbXCRtr2FaF78UvkqLcMzc.png"
        },
        {
          cardName: "Desktop Testimonial Card 10",
          quote: "I send summaries to my friends all the time. They're quick, smart, and share-worthy. It saves me from info overload while still learning stuff. Feels like a shortcut to knowledge.",
          name: "Ron Downey",
          role: "Research Assistant",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/zWDQkwvDwvaParUnJMokuUcNYI.png"
        },
        {
          cardName: "Desktop Testimonial Card 11",
          quote: "I never thought I'd enjoy an AI app this much. It's part of my daily routine now. Even the interface feels calming and fun. I look forward to using it every day.",
          name: "Steve Zuckerberg",
          role: "Tech Blogger",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/dGKUMTYbIiN4M5d9219fOlDKI.jpg"
        },
        {
          cardName: "Desktop Testimonial Card 12",
          quote: "Perfect for lazy readers like me who still want to learn something every day. It keeps things short, sharp, and digestible. Honestly, it makes me feel smarter.",
          name: "Mark Jobs",
          role: "Law Student",
          avatar: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/GS7HuOVJOBQp6fKrWKy8uGltpc.png"
        },
        ...Array(8).fill(null)
      ]
    }
  ] as const
} as const;
