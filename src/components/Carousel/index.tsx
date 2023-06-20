import { IHeroData } from "@/interfaces/heroes";
import HeroDetails from "../HeroDetails";

interface IProp {
  heroes: IHeroData[];
  activeId: string;
}

export default function Carousel({heroes, activeId}: IProp){
  console.log(heroes, activeId);
  return(
    <div className="flex">
      <div className="flex-1 w-full">
        <div className="cursor-grab h-[130vh] relative active:cursor-grabbing">Lista com os heróis</div>
      </div>
      <div className="mt-12 relative flex-1">
        <HeroDetails data={heroes[0]} />
      </div>
    </div>
  )
}