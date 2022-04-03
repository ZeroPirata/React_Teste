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
        marginTop:"-10px"
    }
    return (
        <>
            <div className="row">
                <div className=" col s8">
                    <input type={type} placeholder={value} style={btnConfi} className="validate"/>
                        <label style={labelConfig}>{texto}</label>
                </div>
            </div>
        </>
    )
}
export default BTN