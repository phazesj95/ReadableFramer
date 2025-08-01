export interface FeaturePoint {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const featuresData = {
  featurePoints: [
    {
      id: 1,
      title: 'Private & Secure',
      description: 'Your data stays yours. We prioritize your privacy with secure processing and no tracking',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/z9cXo6fU25tjyawzoutWH7CXpc.png"
    },
    {
      id: 2,
      title: 'Personalized Feed',
      description: 'Our Al learns what you like and curates a custom feed of articles, so you\'re always reading.',
      icon: "https://c.animaapp.com/mds3fdtpoXI5EO/assets/7awLmRRK8Tg4R6OYASzKUphIy8.svg"
    }
  ] as const
} as const;
