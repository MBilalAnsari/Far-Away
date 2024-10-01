import "./Packeditem.css"
import bag from "./asset/bag.png"
function Packeditems({ itemList }) {
    const packedItems = itemList?.filter(item => item.isPacked)
    return (
        <div className="packed-items">
            <img src={bag} alt="" className="bag" />
            <p className="">
                You have {itemList.length} item on your list , and already packed {packedItems?.length} ({(packedItems?.length / itemList?.length || 0) * 100  }%)
            </p>
        </div>
    )
}
export default Packeditems