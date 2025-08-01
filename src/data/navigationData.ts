export interface NavigationLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationData = {
  mainLinks: [
    { id: 'blog', label: 'Blog', href: './blog-index' },
    { id: 'contact', label: 'Contact', href: './contact' }
  ] as const
} as const;
