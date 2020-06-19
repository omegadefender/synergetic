import React from 'react'

class Color extends React.Component {
    
    mkColor = () => {
        const divStyle = {
            backgroundColor: 'blue'
        }
        return <div style={divStyle}>Color</div>       
    }

    render() {
        return this.mkColor()
    }
}

export default Color