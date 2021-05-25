import React from 'react';

const MovieDetail = props => {
    const {id} = props.match.params;
    const {history} = props;
    return ( 
        <div>
            <h1>{id}</h1>
            
            <button type="button" className="btn btn-outline-dark" onClick={()=>history.push('/movies')}>Save</button>
        </div>
     );
}

export default MovieDetail;
 