"use client"

import { useEffect, useState} from "react";
import { IHeroData } from "@/interfaces/heroes";
import HeroDetails from "../HeroDetails";
import HeroPicture from "../HeroPicture";
import { AnimatePresence, motion } from "framer-motion";

interface IProp {
  heroes: IHeroData[];
  activeId: string;
}

enum enPosition {
  FRONT = 0,
  MIDDLE = 1,
  BACK = 2,
}

export default function Carousel({heroes, activeId}: IProp){
  const [visibleItems, setVisibleItems] = useState<IHeroData[]| null>(null);
  const [activeIndex, setActiveIndex] = useState(heroes.findIndex((hero) => hero.id === activeId) - 1);

  useEffect(()=> {
    const items = [...heroes];
    const indexInArrayScope = ((activeIndex % items.length) + items.length) % items.length;
    const visibleItems = [...items, ...items].slice(indexInArrayScope, indexInArrayScope + 3);

    setVisibleItems(visibleItems);
  },[heroes, activeIndex]);

  useEffect(()=>{
    const htmlEl = document.querySelector("html");
    if(!htmlEl || !visibleItems){
      return;
    }

    const currentHeroId = visibleItems[1].id;
    htmlEl.style.backgroundImage = `url("/spiders/${currentHeroId}-background.png")`;
    htmlEl.classList.add("hero-page");

    return () => {
      htmlEl.classList.remove("hero-page");
    }

  },[visibleItems])

  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  }

  if(!visibleItems) {return null;}

  return(
    <div className="flex">
      <div className="flex-1 w-full left-[-15%] relative">
        <div
          className="cursor-grab h-[130vh] relative active:cursor-grabbing"
          onClick={() => handleChangeActiveIndex(1)}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems?.map((item, position) => (
              <motion.div
                key={item.id}
                className="h-full left-0 absolute w-[500px]"
                transition={{ duration: 0.8 }}
                initial={{
                  x: -1500,
                  scale: 0.75,
                }}
                animate={{x: 0, ...getItemStyles(position)}}
                exit={{
                  x: 0,
                  left: "-20%",
                  opacity: 0,
                  scale: 1,
                }}
              >
                <HeroPicture hero={item} hasNewPosition={true} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        className="mt-12 relative flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <HeroDetails data={heroes[0]} />
      </motion.div>
    </div>
  )
}

const getItemStyles = (position: enPosition) => {
  if (position === enPosition.FRONT) {
    return {
      filter: "blur(10px)",
      scale: 1.2,
      zIndex: 3,
    };
  }

  if (position === enPosition.MIDDLE) {
    return {
      left: 300,
      scale: 0.8,
      top: "-10%",
      zIndex: 2,
    };
  }

  return {
    filter: "blur(10px)",
    scale: 0.6,
    left: 160,
    opacity: 0.8,
    zIndex: 1,
    top: "-20%",
  };
};