import "./Logohead.css";
import tree from "./assets/tree_prev_ui.png"
import bag from "./assets/bag.png"

function LogoHead() {
    return (
        <div className="LogoHead">
            <div className="box">
                <img className="tree" src={tree} alt="" />
            </div>
            <h1 className="heading">FAR AWAY</h1>
            <div className="box">
                <img src={bag} alt="" className="tree" />
            </div>
        </div>
    )
}
export default LogoHead