import "./card.css";
const Card = ({ title, img, desc }) => {
    let marks = 45;
    let result = marks > 40 ? "Passed" : "Fail";
    return (
        <div className="container">
            <h2>Card Component</h2>
            <div className="card">
        < div >
        <img
            className="img"
            src={img}
            alt="image component" />
                </div >
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                <div>
                <button className="btn">Click Me</button>
                </div>
                <div className={result}>{result}</div>

            </div >        
        </div >
    );
};

export default Card;