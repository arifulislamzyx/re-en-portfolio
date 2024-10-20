import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface SubOption {
  name: string;
  slug: string;
}

export interface NavItemsProps {
  option?: string;
  icon?: ReactNode;
  subOption?: SubOption[];
  slug?: string;
}

export const navItems: NavItemsProps[] = [
  {
    option: "Home",
    slug: "/",
  },
  {
    option: "About",
    icon: <ChevronDown />,
    subOption: [{ name: "CV", slug: "/cv" }],
  },
  {
    option: "Research",
    icon: <ChevronDown />,
    subOption: [{ name: "Publication", slug: "/publication" }],
  },
  {
    option: "Higher Study-USA",
    slug: "/",
  },
  {
    option: "Miscellaneous",
    icon: <ChevronDown />,
    subOption: [
      { name: "Academic CV Guide", slug: "/" },
      { name: "LinkedIn Guide", slug: "/" },
      { name: "GRE Prep Guide", slug: "/" },
      { name: "IELTS Prep Guide", slug: "/" },
      { name: "Email Templates", slug: "/" },
      { name: "Letter of Recommendation", slug: "/" },
      { name: "Statement of Purpose", slug: "/" },
      { name: "Cover Letter", slug: "/" },
      { name: "Interview", slug: "/" },
    ],
  },
  {
    option: "Contact",
    slug: "/contact",
  },
];
