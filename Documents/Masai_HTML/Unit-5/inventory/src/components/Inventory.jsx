import { useState } from "react"

export function Inventory() {
    const [book, setBooks] = useState(1);
    const [pen, setPens] = useState(1);
    const [notebook, setNotebooks] = useState(1);
    const [inkpen, setInkpens] = useState(1);
    return <>
    {/* This is parent div */}
        <div>
            {/* child div 1 */}
            <div className="items">
                <span>Books:</span>
                <button className="addBook" onClick={()=> setBooks(book+1)}>
                    +
                </button>
                <button className="remBook" onClick={()=> setBooks(book-1)}>
                    -
                </button>
                <span className="totalBooks">{book}</span>
            </div>
            {/* child div 2*/}
            <div className="items">
                <span>Pen:</span>
                <button className="addPen" onClick={()=> setPens(pen+1)}>
                    +
                </button>
                <button className="remPen" onClick={()=> setPens(pen-1)}>
                    -
                </button>
                <span className="totalPens">{pen}</span>
            </div>
            {/* child div 3 */}
            <div className="items">
                <span>Notebooks:</span>
                <button className="addNotebook" onClick={()=> setNotebooks(notebook+1)}>
                    +
                </button>
                <button className="remNotebook" onClick={()=> setNotebooks(notebook-1)}>
                    -
                </button>
                <span className="totalNotebooks">{notebook}</span>
            </div>
            {/* child div 4 */}
            <div className="items">
                <span>Inkpen</span>
                <button className="addInkpen" onClick={()=> setInkpens(inkpen+1)}>
                    +
                </button>
                <button className="remInkpen" onClick={()=> setInkpens(inkpen-1)}>
                    -
                </button>
                <span className="totalInkpens">{inkpen}</span>
            </div>
        </div>
    </>
}