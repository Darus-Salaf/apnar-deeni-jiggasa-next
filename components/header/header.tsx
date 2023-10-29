"use client"

import React from "react"
import Link from "next/link"
import { Card, CardBody, CardHeader } from "@nextui-org/card"

import Mynavbar from "../mynav"
import { Navbar } from "../navbar"
import Navbar2 from "../navbar2"

export default function Header() {
  return (
    <Card className=" w-full m-1 bg-teal-600 border-5 flex justify-center">
      <CardHeader className="flex gap-3 justify-center">
        <Link
          href="/"
          className=" w-11/12 flex justify-center border-2 rounded-tl-3xl rounded-br-3xl"
        >
          <div className=" p-4 ">
            <h5 className=" py-3 text-center px-8">
              জ্ঞানীদের জিজ্ঞাসা করো, যদি তোমরা না জানো (সূরা নাহল-৪৩)
            </h5>
            <h1 className=" sm:text-4xl md:text-5xl font-bold lh lg:text-6xl py-3 text-center px-8 text-3xl">
              আপনার দ্বীনি জিজ্ঞাসা
            </h1>
          </div>
        </Link>
      </CardHeader>

      <CardBody className=" border-1">
        {/* <Mynavbar /> */}
        {/* <Navbar /> */}
        <Navbar2 />
      </CardBody>
    </Card>
  )
}
