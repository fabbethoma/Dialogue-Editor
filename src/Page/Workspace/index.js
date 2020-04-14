import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as ROUTES from '../../routes/index'

class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1>Workspace</h1>
            <Link to={ROUTES.APP}>Back</Link>
        </div> );
    }
}
 
export default Workspace;