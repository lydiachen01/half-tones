const ShapeOptions: React.FC = () => {

    const options = [
        "Circle",
        "Square",
        "Triangle",
        "Hexagon"
    ]

    return (
        <div className="border border-slate-500 grid grid-cols-2 gap-4 max-w-[30vh] max-h-[30vh] justify-center items-center m-auto">
            {options.map((shape: string) => {
            return (
                <div
                id={shape}
                className="border border-slate-400 h-[10vh] w-[10vh] \
                 flex justify-center items-center rounded-xl hover:bg-slate-400">a</div>
            )
            })}
        </div>
    )
}

export default ShapeOptions