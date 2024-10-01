import "./Bodyitems.css"

function Bodyitems({ itemList, setItemList }) {
    const clearAll = () => {
        setItemList([])
    }

    return (
        <div className="pkgbody">
            <div className="itembody">
                {itemList.map((item, index) => (
                    <Itemlist item={item} key={index} setItemList={setItemList} />
                ))}
            </div >

            <div className="pkg-des-btn">
                {/* <select name="" id="">
                    {[1, 2, 3].map((ele, index) => (
                        <option key={index} value="">{ele}</option>
                    ))}
                </select> */}
                <button onClick={clearAll}>Clear List</button>
            </div>
        </div>
    )
}

const Itemlist = ({ item, setItemList }) => {
    const clearItem = (id) => {
        setItemList(prev => prev.filter(item => item.id != id))
    }
    const handlechangebox = (idreceivedfromhandlechange) => {
        setItemList(prev => prev.map((item) => {
            const updateditem = { ...item } // copy item and saved it into updated item
            if (item.id == idreceivedfromhandlechange) {
                updateditem.isPacked = !updateditem.isPacked
            }
            return updateditem
        }))
    }
    return (
        <div className="itembodylist" >
    
                <input type="checkbox" checked={item.isPacked} onChange={() => handlechangebox(item.id)} />
                <p>{item.itemNumber}</p>
                <p>{item.inpText}</p>
          
            <button onClick={() => clearItem(item.id)}>❌</button>
        </div>
    )
}

export default Bodyitems