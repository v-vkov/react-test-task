import React from 'react';
import ListItem from './ListItem';

class Content extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            id: [1],
            value: 'hey there'
        };
        this.changeCount = this.changeCount.bind(this);
    }

    changeCount = (id) => this.setState({id: id});

    reloadPosts = () => this.setState({id: [1] }); //захардкодила??) 
    

    render() {
        return (
            <div className='content'>
                <ListItem {...this.state} changeCount={this.changeCount} reloadPosts={this.reloadPosts}/>
            </div>
        )
    }
   
}

export default Content;