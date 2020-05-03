import React, { Fragment } from 'react';
import PostImg from '../ffff.png'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    addPost = () => {
        let count = [...this.props.id];
        count.push(...this.props.id);
        this.props.changeCount(count);
    }

    deletePost = (i) => {
        console.log(this.props, i);
        let newCount = [...this.props.id];
        newCount.splice(i, 1);
        this.props.changeCount(newCount);
    } 


    render() {
    return (
        <div className='post'>
        <div>
        {
          this.props.id.map((item, i) => {
            return (
              <Fragment key={i}>
                <p>Post {++i} {this.props.value} </p>
                <img src={PostImg} alt="" />
                <button className={'btn'} onClick={() => this.deletePost(i) }>&times;</button>
              </Fragment>
            )
          })
        }
      </div>  
    <button className={'btn'} onClick={ () => this.props.reloadPosts()}>Reload</button>
    <button className={'btn'} onClick={ ()=> this.addPost()}>PUSH</button>
    </div>
    )
    }

}

export default ListItem;

{/* <Fragment key={id}>
<p> Post {++id} - {this.props.state.value}</p>
<img src={PostImg} alt=""/>
<button>&times;</button>
</Fragment> */}