
import { useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

export const MainNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "FAQs",
      items: [
        { name: "Academic FAQs", href: "#academic-faqs" },
        { name: "Non-Academic FAQs", href: "#non-academic-faqs" },
        { name: "GSV Internship FAQs", href: "#internship-faqs" },
        { name: "Placements & Careers", href: "#placements-careers" }
      ]
    },
    { title: "Admissions & Enrollment", href: "#admissions" },
    { title: "Academics", href: "#academics" },
    { title: "Campus Life", href: "#campus-life" },
    { title: "Hostel & Accommodation", href: "#hostel" },
    { title: "Student Support", href: "#support" },
    { title: "Vadodara City Guide", href: "#city-guide" },
    { title: "Contact Us", href: "#contact" }
  ];

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">GSV Freshers' Guide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-80 gap-3 p-4">
                            {item.items.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </a>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </a>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    <div className="space-y-1">
                      <div className="font-medium text-sm text-foreground px-2 py-1">
                        {item.title}
                      </div>
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md ml-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-2 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
