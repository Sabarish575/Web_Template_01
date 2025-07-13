"use client";

import {
  Sheet,
  SheetTitle,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isProductsOpen, setProductsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center uppercase font-semibold">
      <h1 className="text-4xl md:text-5xl tracking-wider text-[#006400]">Your title</h1>

      {/* Desktop Nav */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="px-4 py-2 text-xl rounded-xl hover:bg-[#006400] hover:text-[#fff0f5] transition-colors cursor-pointer">
              <Link href="/home">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 text-xl rounded-xl hover:bg-[#006400] hover:text-[#fff0f5] transition-colors cursor-pointer">
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#fff0f5] text-[#006400] p-4 rounded shadow-md min-w-[180px]">
              <ul className="space-y-2">
                <li>
                  <NavigationMenuLink asChild className="block px-4 py-2 text-xl rounded hover:bg-[#006400] hover:text-[#fff0f5] transition-colors">
                    <Link href="/product">All Products</Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild className="block px-4 py-2 text-xl rounded hover:bg-[#006400] hover:text-[#fff0f5] transition-colors">
                    <Link href="/baggage">Module-1</Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild className="block px-4 py-2 text-xl rounded hover:bg-[#006400] hover:text-[#fff0f5] transition-colors">
                    <Link href="/mobile">Module-2</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {[
            { label: "How to Use", href: "/howtouse" },
            { label: "FAQ", href: "/faq" },
            { label: "About Us", href: "/about" },

          ].map(({ label, href }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild className="px-4 py-2 text-xl rounded-xl hover:bg-[#006400] hover:text-[#fff0f5] transition-colors cursor-pointer">
                <Link href={href}>{label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTitle asChild>
            <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
          </SheetTitle>
          <SheetTrigger>
            <Menu className="w-6 h-6 text-[#006400] cursor-pointer" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-[#fff0f5] text-[#006400] flex flex-col justify-center">
            <nav className="flex flex-col gap-4 text-lg font-semibold uppercase w-full items-start px-4">
              <SheetClose asChild>
                <Link href="/home" className="px-4 py-2 rounded-xl hover:bg-[#006400] hover:text-[#fff0f5] w-full">
                  Home
                </Link>
              </SheetClose>

              {/* Product Section in Mobile */}
              <SheetClose asChild>
                <Link href="/product" className="px-4 py-2 rounded-xl font-bold underline hover:bg-[#006400] hover:text-[#fff0f5] w-full">
                  Product
                </Link>
              </SheetClose>

              <Collapsible open={isProductsOpen} onOpenChange={setProductsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between px-4 py-2 rounded-xl hover:bg-[#006400] hover:text-[#fff0f5] w-full">
                  <span>Subcategories</span>
                  <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link href="/baggage" className="px-4 py-2 rounded-xl hover:bg-[#006400] hover:text-[#fff0f5]">
                      Module-1
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/mobile" className="px-4 py-2 rounded-xl hover:bg-[#006400] hover:text-[#fff0f5]">
                      Module-2
                    </Link>
                  </SheetClose>
                </CollapsibleContent>
              </Collapsible>

              {[
                { label: "How to Use", href: "/how-to-use" },
                { label: "FAQ", href: "/faq" },
                { label: "About Us", href: "/about" },
              ].map(({ label, href }) => (
                <SheetClose asChild key={href}>
                  <Link href={href} className="px-4 py-2 rounded-xl hover:bg-[#006400] hover:text-[#fff0f5] w-full">
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
