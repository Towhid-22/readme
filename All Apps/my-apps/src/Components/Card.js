// const para = "Near thence sooth through feere and was misery like did friend, wrong control yes shrine.";
// const todoTitle = "Call Family"
const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const dateYear = date.getFullYear();


function Card(props){
  const {titleText, descText} = props;
  return <div className='card'>
            <h3 className='cardTitle'>{titleText}</h3>
            <p className='cardDesc'>{descText}</p>
            <p className='cardFooter'>{dateName + "/" + dateMonth + "/" + dateYear}</p>
        </div>
}

export default Card;