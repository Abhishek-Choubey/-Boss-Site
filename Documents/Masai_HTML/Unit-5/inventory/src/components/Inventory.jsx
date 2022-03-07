export function Inventory() {
    var arr = [];
    function AddData() {

    }
    function Display() {

    }
    return <>
    {/* This is parent div */}
        <div>
            {/* child div 1 */}
            <div className="items">
                <span>Books:</span>
                <button className="addBook">
                    +
                </button>
                <button className="remBook">
                    -
                </button>
                <span className="totalBooks">1</span>
            </div>
        </div>
    </>
}