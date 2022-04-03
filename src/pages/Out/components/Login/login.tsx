type PropsBTN = {
    texto: string
    width: number | string
    type: string
    value: string
}
function BTN({ texto, width, type, value
}: PropsBTN) {
    const btnConfi = {
        width: width,
    }
    const labelConfig = {
        fontSize: "2em",
        fontWeight: "bold",
        marginTop: "-10px"
    }
    return (
        <>
            <div className="row">
                <div className="col s8">
                    <input form="last_name"type={type} placeholder={value} style={btnConfi} className="validate" />
                    <label className="validate" id="last_name" style={labelConfig}>{texto}</label>
                </div>
            </div>
        </>
    )
}
export default BTN