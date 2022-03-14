import { useState } from "react"
import "../styles/Inventory.css"
export function Inventory() {
    const [book, setBooks] = useState(13);
    const [pen, setPens] = useState(10);
    const [notebook, setNotebooks] = useState(44);
    const [inkpen, setInkpens] = useState(78);
    const [total, setTotal] = useState(book+pen+notebook+inkpen);

    function bookHandleChange(val){
        setTotal(total+val)
        return setBooks(book+val)
    }
    function penHandleChange(val){
        setTotal(total+val)
        return setPens(pen+val)
    }
    function NotebookHandleChange(val){
        setTotal(total+val)
        return setNotebooks(notebook+val)
    }
    function inkpenHandleChange(val){
        setTotal(total+val)
        return setInkpens(inkpen+val)
    }
    return <>
    {/* This is parent div */}
        <div>
            {/* child div 1 */}
            <div className="items">
                <span>Books:</span>
                <button className="addBook" onClick={()=> bookHandleChange(1) }  >
                    +
                </button>
                <button className="remBook" onClick={()=> bookHandleChange(-1)}>
                    -
                </button>
                <span className="totalBooks">{book}</span>
            </div>
            {/* child div 2*/}
            <div className="items">
                <span>Pen:</span>
                <button className="addPen" onClick={()=> penHandleChange(1)}>
                    +
                </button>
                <button className="remPen" onClick={()=> penHandleChange(-1)}>
                    -
                </button>
                <span className="totalPens">{pen}</span>
            </div>
            {/* child div 3 */}
            <div className="items">
                <span>Notebooks:</span>
                <button className="addNotebook" onClick={()=> NotebookHandleChange(1)}>
                    +
                </button>
                <button className="remNotebook" onClick={()=> NotebookHandleChange(-1)}>
                    -
                </button>
                <span className="totalNotebooks">{notebook}</span>
            </div>
            {/* child div 4 */}
            <div className="items">
                <span>Inkpen</span>
                <button className="addInkpen" onClick={()=> inkpenHandleChange(1)}>
                    +
                </button>
                <button className="remInkpen" onClick={()=> inkpenHandleChange(-1)}>
                    -
                </button>
                <span className="totalInkpens">{inkpen}</span>
            </div>
            <div className="total">{total}</div>
        </div>
    </>
}