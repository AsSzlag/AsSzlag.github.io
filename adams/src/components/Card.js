
const Card = ({title, icon, body, link}) => {
    return (
  <div className="card-dash">
    <div className="card-container">
      <div className="image-container">
          {icon}
          </div>
          <div className="card-content">
              <div className="card-title">
                <h4>{title}</h4>
              </div>
              <div className="card-body">
                <p>{body}</p>
              </div>
                </div>
                <div className="btn">
                  <a href={link} target="blank">
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
