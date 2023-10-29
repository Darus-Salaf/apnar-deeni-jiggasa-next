import Link from "next/link"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar"

import { SiteConfig, siteConfig } from "@/config/site"

// import { Button } from "@nextui-org/button";
// import { AcmeLogo } from "./icon/acmelogo"

export default function Mynavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link color="foreground" href={item.href} className=" bg-lime-100">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          {/* <button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </button> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
