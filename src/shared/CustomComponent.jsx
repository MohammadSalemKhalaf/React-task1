function CustomComponent(props) {
    return(
        <>
            <button className={`btn btn-${props.color} shadow rounded btn-lg  m-2`}>{props.text}</button>
        </>
        
    )
}
export default CustomComponent;