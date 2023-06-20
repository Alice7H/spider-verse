import HeroesList from "@/components/HeroesList"
import { IHeroData } from "@/interfaces/heroes"


async function getData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch("http://localhost:3000/api/heroes");

  if(!res.ok){
    throw new Error("Failed to get data");
  }
  return res.json();
}

export default async function Home() {
  const res = await getData();
  return (
    <main className="flex items-center flex-col relative">
      <HeroesList heroes={res.data} />
    </main>
  )
}