import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";


const ColorList = ({colors}) => {
  return (
    <section className="colors">
        {colors.map((singlecolor,index)=>{
            return <SingleColor key={nanoid()} color={singlecolor} index={index} />
        })}
    </section>
  )
}

export default ColorList