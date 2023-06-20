import { spidermanFont } from "@/fonts";
import { IHeroData} from "@/interfaces/heroes";
import HeroPicture from "../HeroPicture";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({heroes}: IProps){
  const heroesVariantHeight: {[x: string]: string} = {
    'spider-man-616': 'h-[360px]',
    'spider-woman-65': 'h-[300px]',
    'spider-man-1610': 'h-[324px]',
    'sp-dr-14512': 'h-[324px]',
    'spider-ham-8311': 'h-[146px]',
    'spider-man-90214': 'h-[376px]',
    'spider-man-928': 'h-[360px]',
  }

  return (
    <>
      <h1 className={`
        ${spidermanFont.className}
        text-[26vw]
        m-0
        hero-screen:text-[30rem]
       `}>Personagens</h1>

       <section className="
        flex justify-between items-end
        max-w-[1920px-700px]
        absolute
        top-[40%]
        w-full
        hero-screen:max-w-[calc(1920px-400px)]
        hero-screen:top-1/2
       ">
        {heroes && heroes.map(hero =>{
          return <div
            className={`
              cursor-pointer
              relative
              ${heroesVariantHeight[hero.id]}
            `}
            key={hero.id}
          >
            <HeroPicture hero={hero} />
          </div>
        })}
       </section>
    </>
  )
}