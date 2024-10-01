import { useState } from "react"
import "./Subnav.css"

function Subnav({ setitemList }) {
    const [itemNumber, setitemNumber] = useState(1)
    const [inpText, setinpText] = useState("")

    const addHandler = () => {
        setitemList(prevItems => [...prevItems, {
            itemNumber,
            inpText,
            isPacked: false,
            id: Math.random() * 1000000000
        }
        ])
        // const bringList = [...itemList];// spread ( concanitation)
        // bringList.push({
        //     itemNumber,
        //     inpText,
        //     id:bringList.length
        // });
        // setitemList(bringList)

    }

    return (
        <div className="Subnav">

            {/* //ParaGraph */}
            <div>
            <p>What do you select to go for 😍 Trip?</p>
            </div>

            {/* //item Qty */}
            <select onChange={(e) => setitemNumber(e.target.value)}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, index) => (
                    <option key={index}>{ele}</option>
                ))}
            </select>

            {/* //inp Value */}
            <input onChange={(e) => setinpText(e.target.value)}
                value={inpText} />


            <button onClick={addHandler}>ADD</button>
        </div>
    )
}
export default Subnav