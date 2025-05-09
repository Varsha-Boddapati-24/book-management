import './style.css'
function Books(props) {
    return (
        <>
            <div className="card">
                <img src={props.data.image} alt="" width={300} height={200} />
                <div className="details">
                    <h2 className="title">{props.data.title}</h2>
                    <p className="para">{props.data.description}</p>
                </div>
            </div>


        </>
    )
}
export default Books;