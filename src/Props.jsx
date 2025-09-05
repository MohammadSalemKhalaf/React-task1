import CustomComponent from "./shared/CustomComponent";
function Props(props)
{
    console.log(props);
    return (
        <div className="Container   m-5 p-5 bg-primary text-white rounded">
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <CustomComponent color="success" text="Ditales"/>
            <CustomComponent color="danger" text="Delete"/>
        </div>
    )
}
export default Props;