import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartActions';
import './Home.css';

function Home(props) {

  const handleClick = (id) => {
    addToCart(props.articles.items[id].id)
  }

return(
  <div className="container-fluid">
    <h4 className="center">Our items</h4>
    <div className="row center">
      {props.articles.items.map((item, index) => {
      return (
        <div className="card hoverable col s3 m3 l3" key={item.id}>
          <div className="card-image">
              <img src={item.img} alt={item.title}/>
              <span className="card-title">{item.title}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light teal lighten-2" 
                  onClick={()=>{handleClick(item.id)}}>
                    <i className="material-icons">control_point
                    </i>
              </a>
          </div>
          <div className="card-content">
              <p className ="text">{item.desc}</p>
              <p><b>Price: {item.price}€</b></p>
          </div>
        </div>
      )
    })}
    </div>
  </div>
)}

const mapStateToProps = store => ({
  articles: store
})

const mapDispatchToProps= dispatch => {
  return {
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps)(Home);