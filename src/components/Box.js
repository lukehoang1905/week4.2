// import React from './node_modules/react'

// export default function Box this.props. Component {
//     render() {
//         return (
//             <div class="box">
//                 Box
//             </div>
//         )
//     }
// }

import React  from 'react'


export default function Box(props) {
    return (
        <div className="box">
            <div className={`Box ${props.winner ? 'winner' : 'loser'}`}>
            <h1>{props.title}</h1>
            
            <img src={props.imgUrl} alt={props.title}/>
            <h3>{props.winner ? 'Won' : 'Loss'}</h3>
        </div></div>
    )
}
