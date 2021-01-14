import React from 'react'
import Photo from './Photo'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
function PhotoWall(props){
    return <div>
        <Link className="addIcon" to="/AddPhoto"></Link>
        {/* <button onClick ={props.onNavigate} className="addIcon">+</button> */}
         <div className="photoGrid">
        {
            props.posts
            .sort(function(x,y){
                return y.id - x.id
            })
            .map( (post,index)=> <Photo key = {index} post={post} onRemovePhoto={props.onRemovePhoto}/> )}
            </div>
    </div>
}

PhotoWall.propTypes = {
    posts: propTypes.array.isRequired,
    onRemovePhoto: propTypes.func.isRequired
}
// or use a class 
// class PhotoWall extends Component{
    
//     render(){
    
//     }
// }


export default PhotoWall