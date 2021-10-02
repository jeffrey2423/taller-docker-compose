import React, { Component } from "react";
import Spinner from "../components/Spinner";

import { DeleteAll, InsertFakeData, GetLastPosition } from '../api/fakerServices'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default class DownLoader extends Component {
    state = {
        PosicionInicial: null,
        Loading: false,
        errorFormulario: true,
        ValorMinimo: null
    }

    async componentDidMount() {
        try {
            this.setState({ Loading: true })
            const data = await GetLastPosition()
            if (data.error) {
                this.setState({
                    loading: false
                });
                toast.error(data.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                if (data.position === null) {
                    this.setState({ ValorMinimo: 0 })
                    this.setState({ PosicionInicial: this.state.ValorMinimo })
                } else {
                    this.setState({ ValorMinimo: parseInt(data.position) + 1 })
                    this.setState({ PosicionInicial: this.state.ValorMinimo })
                }
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
        const symbolsArr = ["e", "E", "+", "-", "."];

        const handleChange = e => {
            this.setState({ PosicionInicial: e.target.value })
        };



        const HandleInsertFakeData = async (e) => {
            try {
                e.preventDefault()
                if (this.state.PosicionInicial !== null) {
                    if (this.state.PosicionInicial < this.state.ValorMinimo) {
                        const temp = parseInt(this.state.ValorMinimo)
                        toast.error("La proxima posicion deberia ser " + temp + " o mayor a " + temp, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        const jsondata = {
                            position: this.state.PosicionInicial
                        }
                        this.setState({ Loading: true })
                        const data = await InsertFakeData(jsondata)
                        if (data.error) {
                            this.setState({
                                loading: false
                            });
                            toast.error(data.error, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        } else {
                            toast.success(data, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                    }
                } else {
                    toast.error("Debe digitar una posicion inicial", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
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
                this.setState({ PosicionInicial: null })
                try {
                    this.setState({ Loading: true })
                    const data = await GetLastPosition()
                    if (data.error) {
                        this.setState({
                            loading: false
                        });
                        toast.error(data.error, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        if (data.position === null) {
                            this.setState({ ValorMinimo: 0 })
                            this.setState({ PosicionInicial: this.state.ValorMinimo })
                        } else {
                            this.setState({ ValorMinimo: parseInt(data.position) + 1 })
                            this.setState({ PosicionInicial: this.state.ValorMinimo })
                        }
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
        }

        const HandleDeleteAll = async (e) => {
            try {
                e.preventDefault()
                this.setState({ Loading: true })
                const data = await DeleteAll()
                if (data.error) {
                    this.setState({
                        loading: false
                    });
                    toast.error(data.error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.success(data, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
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
                try {
                    this.setState({ Loading: true })
                    const data = await GetLastPosition()
                    if (data.error) {
                        this.setState({
                            loading: false
                        });
                        toast.error(data.error, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        if (data.position === null) {
                            this.setState({ ValorMinimo: 0 })
                            this.setState({ PosicionInicial: this.state.ValorMinimo })
                        } else {
                            this.setState({ ValorMinimo: parseInt(data.position) + 1 })
                            this.setState({ PosicionInicial: this.state.ValorMinimo })
                        }
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
        }

        if (this.state.Loading) {
            return <Spinner />;
        }
        return (
            <React.Fragment>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm">
                            <label for="exampleInputEmail1" class="form-label">Posicion</label>
                            <input
                                id="exampleInputEmail1"
                                type="number"
                                class="form-control"
                                name="PosicionInicial"
                                onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}
                                onChange={handleChange}
                                value={this.state.PosicionInicial}
                            />
                            <div id="emailHelp" class="form-text">La proxima posicion es {this.state.ValorMinimo}</div>
                        </div>
                        <div class="col-sm">
                            <label for="" class="form-label"> </label>
                            <button
                                type="button"
                                class="form-control btn-success"
                                onClick={HandleInsertFakeData}
                            >
                                Generar Datos
                            </button>
                        </div>
                        <div class="col-sm">
                            <label for="" class="form-label"> </label>
                            <button
                                type="button"
                                class="form-control btn-danger"
                                onClick={HandleDeleteAll}
                            >
                                Borrar Datos
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}