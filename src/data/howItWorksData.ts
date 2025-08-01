export interface HowItWorksStep {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly containerClass: string;
  readonly numberClass: string;
  readonly words: string[][];
}

export const howItWorksData = {
  steps: [
    {
      id: '1',
      number: '01',
      title: 'Start Talking',
      description: 'Start by tapping the mic and saying what you\'re looking for—no typing needed.',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/FDAhq9f3ug0BoEPs7O4ptpHO8k.svg",
      containerClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-indigo-200 md:box-border md:gap-x-0 md:flex md:flex-col md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-6 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px]",
      numberClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-indigo-200 md:box-border md:gap-x-2 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-200 after:md:rounded-[20px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif",
      words: [
        ['Speak', 'Speak', 'Speak', 'Speak', 'Speak', 'Speak', 'Speak', 'Speak', 'Speak', 'Speak'],
        ['Record', 'Record', 'Record', 'Record', 'Record', 'Record', 'Record', 'Record', 'Record'],
        ['Send', 'Send', 'Send', 'Send', 'Send', 'Send', 'Send', 'Send', 'Send', 'Send', 'Send']
      ]
    },
    {
      id: '2',
      number: '02',
      title: 'Let AI Work',
      description: 'Our system quickly finds and summarizes content that matches your mood.',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/y2fQxWjGNsqgs7802pnhCpUtppk.png",
      containerClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-fuchsia-200 md:box-border md:gap-x-0 md:flex md:flex-col md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-6 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px]",
      numberClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-fuchsia-200 md:box-border md:gap-x-2 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-200 after:md:rounded-[20px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif",
      words: [
        ['Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask', 'Ask'],
        ['Receive', 'Receive', 'Receive', 'Receive', 'Receive', 'Receive', 'Receive', 'Receive'],
        ['Trust', 'Trust', 'Trust', 'Trust', 'Trust', 'Trust', 'Trust', 'Trust', 'Trust', 'Trust', 'Trust']
      ]
    },
    {
      id: '3',
      number: '03',
      title: 'Read or Listen',
      description: 'Get short summaries, full articles, or audio versions—your call, your flow.',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/WYdINb3hYiItINFlNGQQZExJQKs.svg",
      containerClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-violet-200 md:box-border md:gap-x-0 md:flex md:flex-col md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-6 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px]",
      numberClass: "static [align-items:normal] bg-transparent box-content gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-violet-200 md:box-border md:gap-x-2 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[20px] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-200 after:md:rounded-[20px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif",
      words: [
        ['Share', 'Share', 'Share', 'Share', 'Share', 'Share', 'Share', 'Share', 'Share', 'Share'],
        ['Build', 'Build', 'Build', 'Build', 'Build', 'Build', 'Build', 'Build', 'Build', 'Build', 'Build'],
        ['Grow', 'Grow', 'Grow', 'Grow', 'Grow', 'Grow', 'Grow', 'Grow', 'Grow', 'Grow', 'Grow']
      ]
    }
  ] as const
} as const;
