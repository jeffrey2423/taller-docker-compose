import React from 'react'

const DataTable = (props) => {
    console.log(props.Users)
    if (props.Users.length === 0) {
        return (<center>No hay datos para mostrar</center>);
    }
    return (
        <React.Fragment>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Posicion</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Users.map((item, i) => (
                        <tr key={i}>
                            <td>{item.position}</td>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.identification}</td>
                            <td>{item.email}</td>
                            <td><img
                                src={item.profile_picture}
                                class="img-fluid img-thumbnail"
                                alt={item.name} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default DataTable