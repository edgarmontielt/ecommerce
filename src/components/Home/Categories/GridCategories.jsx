import React from 'react'
import CardCategory from './CardCategory'
import { BsTools, BsFillKeyboardFill, BsLightbulb, BsCpuFill, BsFillHddNetworkFill } from "react-icons/bs"
import { RiComputerFill } from "react-icons/ri"
import { MdCable, MdSettingsInputHdmi } from "react-icons/md"
import { GiElectricalResistance } from "react-icons/gi"

export default function GridCategories() {
     return (
          <div className=' w-auto max-w-screen-desktop mx-8 tablet:mx-[98px] mb-20 bg-white rounded flex flex-wrap items-center justify-center'>
               <CardCategory name={"Tools"} icon={<BsTools />} />
               <CardCategory name={"Boards"} icon={<BsFillKeyboardFill />} />
               <CardCategory name={"Leds"} icon={<BsLightbulb />} />
               <CardCategory name={"Integrated"} icon={<BsCpuFill />} />
               <CardCategory name={"Accessories"} icon={<RiComputerFill />} />
               <CardCategory name={"Cables"} icon={<MdCable />} />
               <CardCategory name={"Adapters"} icon={<MdSettingsInputHdmi />} />
               <CardCategory name={"Network"} icon={<BsFillHddNetworkFill />} />
               <CardCategory name={"Ressitances"} icon={<GiElectricalResistance />} />
          </div>
     )
}
