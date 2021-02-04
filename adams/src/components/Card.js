
const Card = ({title, imageUrl, body, link, imgAlt}) => {
    return (
  <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt={imgAlt}/>
        <div className="card-content">
            <div className="card-title">
              <h4>{title}</h4>
            </div>
            <div className="card-body">
              <p>{body}</p>
            </div>
              </div>
              <div className="btn">
                <a href={link}>
                  <button>
                    Link here
                  </button>
                </a>
              </div>
        </div>
  </div>
  )
}

export default Card
