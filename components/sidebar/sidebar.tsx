"use client"

import React from "react"
import Link from "next/link"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { Listbox, ListboxItem } from "@nextui-org/listbox"

import cats from "../../fakedata/cats"
import { ListboxWrapper } from "./ListboxWrapper"

export default function Sidebar() {
  return (
    <ListboxWrapper>
      <Listbox items={cats} aria-label="Dynamic Actions">
        {(item: any) => (
          <ListboxItem key={item.id}>
            <Accordion variant="shadow">
              <AccordionItem key="1" aria-label={item.cat} title={item.cat}>
                {item.subCat.map((subcat: any) => (
                  <div className=" hover:bg-slate-400 p-2 text-base border-b-1 rounded-sm">
                    <Link href={`${subcat}/type/posts`}>{subcat}</Link>
                  </div>
                ))}
              </AccordionItem>
            </Accordion>
            {/* {item.cat} */}
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  )
}
