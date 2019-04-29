import React from 'react'

export default class Homeworld extends React.Component {
    state = {
        name: ''
    }

    componentDidMount() {
        this.setState({ name: '' })
        fetch(`${this.props.homeworld}`)
            .then((homeworldRes) => {
                if (!homeworldRes)
                    return homeworldRes.json().then(e => Promise.reject(e))
                return homeworldRes.json()
            })
            .then((homeworld) => {
                console.log(homeworld.name)
                this.setState({name: homeworld.name})
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <>
                homeworld: {this.state.name}
            </>
        )
    }
}