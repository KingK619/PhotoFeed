import React,{Component} from 'react'
class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const imgLink= event.target.elements.link.value
        const description = event.target.elements.description.value
        const post={
            id: Number(new Date()),
            description : description,
            imageLink  : imgLink
        }
        if(imgLink && description){
            this.props.onAddPhoto(post)
        }

    }

    render()
    {   return <div>
        <h1>Photowall</h1>
        <div>
        <form onSubmit={this.handleSubmit} class="form"> 
            <input type="text" placeholder="Link" name="link"/>
            <input type="text" placeholder="Description" name="description"/>
            <button>Post</button>

        </form>
        </div>
        </div>
    }
}
export default AddPhoto;