import React, { Component } from "react";
import Spinner from "../components/Spinner";
import DataTable from "../components/DataTable";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GetUsers } from '../api/fakerServices'

toast.configure()

export default class Index extends Component {
    state = {
        Users: [],
        Loading: false
    }


    async componentDidMount() {
        try {
            this.setState({ Loading: true })
            const dataUsers = await GetUsers()
            if (dataUsers.error) {
                this.setState({
                    loading: false
                });
                toast.error(dataUsers.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                this.setState({ Users: dataUsers })
            }

        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            this.setState({ Loading: false })
        }
    }



    render() {

        if (this.state.Loading) {
            return <Spinner />;
        }
        return (
            <React.Fragment>
                <DataTable
                    Users={this.state.Users}
                />
            </React.Fragment>
        );
    }
}