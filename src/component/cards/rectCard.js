const RectCard = ({color,text}) => {
    return ( 
        <div className={`rect-card t-${color}`}>
            <p>{text}</p>
        </div>
     );
}
 
export default RectCard;