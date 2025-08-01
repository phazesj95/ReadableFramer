export interface FooterLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface FooterLinkSection {
  readonly id: string;
  readonly title: string;
  readonly links: FooterLink[];
}

export const footerData = {
  linkSections: [
    {
      id: 'sections',
      title: 'Sections',
      links: [
        { id: 'how-it-works', label: 'How It Works', href: './#how-it-works' },
        { id: 'features', label: 'Features', href: './#features' },
        { id: 'why-choose-us', label: 'Why Choose Us', href: './#why-choose-us' },
        { id: 'testimonials', label: 'Testimonials', href: './#testimonials' }
      ]
    },
    {
      id: 'social',
      title: 'Social',
      links: [
        { id: 'instagram', label: 'Instagram', href: "https://www.instagram.com/breeje.work/" },
        { id: 'linkedin', label: 'Linkedin', href: "https://www.linkedin.com/in/rehan-ahmed-a97042285/" },
        { id: 'threads', label: 'Threads', href: "https://www.threads.net/@breeje.work" },
        { id: 'twitter', label: 'Twitter', href: "https://x.com/rehanxahmed" }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      links: [
        { id: 'contact', label: 'Contact Us', href: './contact' },
        { id: 'blogs', label: 'Blogs', href: './blog-index' }
      ]
    }
  ] as const
} as const;
