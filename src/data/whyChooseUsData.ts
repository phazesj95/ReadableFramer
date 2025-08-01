export interface WhyChooseUsCard {
  readonly id: number;
  readonly title: string;
  readonly number: string;
  readonly icon: string;
  readonly positionClass: string;
  readonly numberClass: string;
}

export interface Statistic {
  readonly id: number;
  readonly prefix: string;
  readonly value: string;
  readonly suffix: string;
  readonly description: string;
}

export const whyChooseUsData = {
  cards: [
    {
      id: 4,
      title: 'Loved By Millions',
      number: '01',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/kYkKu4Pikzca3Q0WE9zWfCC0kU.svg",
      positionClass: "static box-content shrink transform-none left-auto bottom-auto md:absolute md:aspect-auto md:box-border md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:bottom-0",
      numberClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-fuchsia-200 md:box-border md:gap-x-2 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-100 after:md:rounded-[20px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
    },
    {
      id: 2,
      title: 'Award Winning Designs',
      number: '02',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/2xcDfZLsOBJy6uwYrJw64wNbeU.svg",
      positionClass: "static box-content shrink transform-none left-auto top-auto md:absolute md:aspect-auto md:box-border md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[9.999987517730313deg] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:-left-4 md:top-[70px]",
      numberClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-indigo-200 md:box-border md:gap-x-2 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-100 after:md:rounded-[20px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
    },
    {
      id: 1,
      title: 'Best Layouts',
      number: '03',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/dk807KmXVZoUN4yHW5qdJCBBnII.svg",
      positionClass: "static box-content shrink transform-none right-auto top-auto md:absolute md:aspect-auto md:box-border md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:right-[-114px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-42px] md:rotate-[-9.999987517730313deg] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]",
      numberClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-violet-200 md:box-border md:gap-x-2 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-100 after:md:rounded-[20px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
    },
    {
      id: 3,
      title: 'No Ads Bloated',
      number: '04',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/zcn9u4AykHzsJjjaN93T83mQHlU.svg",
      positionClass: "static box-content shrink transform-none left-auto top-auto md:absolute md:aspect-auto md:box-border md:shrink-0 md:left-[-84px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-87px] md:rotate-[-4.5000017442780464deg] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]",
      numberClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-fuchsia-200 md:box-border md:gap-x-2 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-100 after:md:rounded-[20px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
    }
  ] as const,
  statistics: [
    {
      id: 1,
      prefix: '$',
      value: '55',
      suffix: 'M+',
      description: 'Fewer Search Frustrations'
    },
    {
      id: 2,
      prefix: '',
      value: '96',
      suffix: '%',
      description: 'Our Customer Retention'
    },
    {
      id: 3,
      prefix: '',
      value: '85',
      suffix: '%',
      description: 'Report Feeling More Informed'
    },
    {
      id: 4,
      prefix: '',
      value: '100',
      suffix: '%',
      description: 'Less Time Wasted Searching'
    }
  ] as const
} as const;
