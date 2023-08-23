import React from 'react'
import { Link } from 'react-router-dom'
import "./cardb.css"
function Cardb({data}) {
    return (
        <div className='container'>
            <div className="blogs__container">
                {
                    data.map((product)=>{
                        return(
                            <Link className='blogItem-link'  to={`/blog/${product.id}` }>
                            <div className="post">
                                    <img src={product.image}/>
                                    <small>{product.tag}</small>
                                    <h2>{product.title.substring(0, 90) + "..."}</h2>
                                    <p className="description">{product.description.substring(0, 180) + "..."}</p>
                                        <div className="more">
                                                <p>Read</p>
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                        </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cardb