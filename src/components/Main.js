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
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://media.gq-magazine.co.uk/photos/5e7b6f6fa36302000869f3f0/master/w_1920,c_limit/20200325-anime-10.jpg"
                }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
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