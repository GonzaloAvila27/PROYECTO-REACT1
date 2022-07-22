import './CSS/Cards.css'

const Cards = () => {
  return (
    <div className='container'>
    <div className="card Cards">
        <img className="card-img-top"/>
            <div className="card-body">
                <div className='image'></div>
                <h5 className="card-title">Chinchulines</h5>
                <a className="btn btn-primary">Add to Cart</a>
            </div>
    </div>
    </div>
  )
}

export default Cards
