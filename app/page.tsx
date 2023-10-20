import { title } from "@/components/primitives"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className="text-5xl font-semibold">
        Welcome to{" "}
        <span className={title({ color: "violet" })}>Apnar Deeni Jiggasa</span>
      </h1>
    </section>
  )
}
