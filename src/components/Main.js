import React, { Component } from 'react';
import PhotoWall from './PhotoWall'
import Title from './Title'
import AddPhoto from './addphoto'
import {Route} from 'react-router-dom'

class Main extends Component{
    constructor(){
        super();
        this.state = {
            posts:[{
                id: 0,
                description: "Winry",
                imageLink: "https://data.whicdn.com/images/63875007/original.gif"
                }, {
                id: 1,
                description: "Beauty of Nature",
                imageLink: "https://learn.zoner.com/wp-content/uploads/2018/08/landscape-photography-at-every-hour-part-ii-photographing-landscapes-in-rain-or-shine.jpg"
                }, {
                id: 2,
                description: "Welcome to the PhotoFeed!!",
                imageLink: "https://cdn.shopify.com/s/files/1/0318/2649/files/1525780811_IdioticMindlessAntelope-max-1mb_copy_grande.gif?v=1580711257"
                }],
                screen: 'photo'  // photos, add photo
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
        
    }
    removePhoto(postRemoved)
    {
        console.log(postRemoved.description);
        this.setState((state)=>({
            posts: state.posts.filter(post => post!==postRemoved)
        }))
    }
    addPhoto(newPhoto){
        this.setState(state =>({
            posts: state.posts.concat([newPhoto])
        }))
    }
    navigate()
    {
        this.setState({
            screen: "addPhoto"
        })
    }
    // componentDidMount()
    // {
    //     const data = SimulateFetchFromDatabase();
    //     this.setState({
    //         posts: data
    //     })
    // }

    componentDidUpdate(prevProps,prevState){
        console.log(prevState.posts);
        console.log(this.posts);
    }
    render()
    {
      return (<div>
            <Route exact path='/' render={()=>(
                <div>
                <Title title={'PhotoFeed'}/>
                <PhotoWall posts ={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                </div> 
            )}/>
                
                
            <Route path="/AddPhoto" render={({history})=>
                        <AddPhoto onAddPhoto={(addedPost)=>{
                            this.addPhoto(addedPost);
                            history.push('/')
                        }}/>
            }/>
                
            </div>)
    }

}
// function SimulateFetchFromDatabase(){
//     return []
// }
export default Main