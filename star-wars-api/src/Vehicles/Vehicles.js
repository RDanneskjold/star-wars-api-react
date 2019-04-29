import React from 'react'

export default class Vehicles extends React.Component {
    state = {
        name: []
    }

    componentDidMount() {
        this.setState({ name: [] })
        this.props.vehicles.map(vehicle =>
            fetch(`${vehicle}`)
                .then((vehicleRes) => {
                    if (!vehicleRes)
                        return vehicleRes.json().then(e => Promise.reject(e))
                    return vehicleRes.json()
                })
                .then((vehicle) => {
                    console.log(vehicle.name)
                    this.setState({ name: [...this.state.name, vehicle.name] })
                })
                .catch(error => {
                    console.error({ error })
                })
        )
    }

    render() {
        return (
            <>
                vehicles: {this.state.name.join(', ')}
            </>
        )
    }
}