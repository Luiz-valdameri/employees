import { Box, Button, Grid, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Service from "../../helpers/Service"
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FormEmployee from './components/FormEmployee';
import DeleteAlert from './components/DeleteAlert';
import EmployeeHelper from '../../helpers/EmployeeHelper';

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [employeeEdit, setEmployeeEdit] = useState(null);
    const [employeeDelete, setEmployeeDelete] = useState(null);
    const [formError, setFormError] = useState(null);
    const searchField = useRef(null);

    React.useEffect(() => {
        listEmployees();
    }, [])

    const listEmployees = () => {
        var service = new Service();

        var keyword = searchField.current.children[1].children[0].value;

        var url = "/employee";

        if (keyword) url += `/search/${keyword}`

        service.get(url)
            .then(res => {
                setEmployees(res)
            })
            .catch(err => {
                console.error(err)
            })

    }

    const newEmployee = () => {
        const newEmployee = {
            name: "",
            surname: "",
            email: "",
            nis: ""
        }

        setEmployeeEdit(newEmployee)
    }

    const editEmployee = (employee) => {
        setEmployeeEdit(employee)
    }

    const handleDeleteEmployee = (employee) => {
        setEmployeeDelete(employee)
    }

    const handleChangeForm = (event) => {
        var employee = JSON.parse(JSON.stringify(employeeEdit));
        employee[event.target.name] = event.target.value;

        setEmployeeEdit(employee);
    }

    const handleSaveForm = () => {
        var service = new Service();
        var employeesFakeObj = JSON.parse(JSON.stringify(employees));

        if (employeeEdit.id) {
            service.put("/employee", employeeEdit)
                .then(res => {
                    if (res.error) {
                        setFormError(res.message);
                    } else {
                        var index = employeesFakeObj.findIndex(el => el.id === res.id)
                        employeesFakeObj[index] = res;
                        setEmployees(employeesFakeObj)
                        setEmployeeEdit(null)
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        } else {
            service.post("/employee", employeeEdit)
                .then(res => {
                    if (res.error) {
                        setFormError(res.message);
                    } else {
                        employeesFakeObj.push(res)
                        setEmployees(employeesFakeObj)
                        setEmployeeEdit(null)
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        }

    }

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            listEmployees()
        }
    }

    const deleteEmployee = (id) => {
        var employeesFakeObj = JSON.parse(JSON.stringify(employees));
        var service = new Service();
        service.delete(`/employee/${id}`,)
            .then(res => {
                var index = employeesFakeObj.findIndex(el => el.id === id)
                employeesFakeObj.splice(index, 1)
                setEmployees(employeesFakeObj)
                setEmployeeDelete(null)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <Box display="flex" flexDirection="column" width="80%" maxWidth="860px">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={5} >
                    <Typography style={{ fontWeight: "bold", color: "#707070", fontSize: "26px" }} variant="h4">
                        FUNCIONÁRIOS
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Pesquisar"
                        onKeyDown={keyPress}
                        ref={searchField}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><IconButton onClick={listEmployees}><SearchIcon /></IconButton></InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3} style={{ display: "flex", justifyContent: "center" }}>
                    <Button fullWidth variant="contained" color="primary" onClick={newEmployee}>
                        <AddIcon /> Adicionar
                    </Button>
                </Grid>
            </Grid>

            <Paper style={{ marginTop: "10px" }}>

                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="body1" style={{ fontWeight: "bold", color: "#707070" }}>NOME</Typography></TableCell>
                                <TableCell align="center"><Typography variant="body1" style={{ fontWeight: "bold", color: "#707070" }}>PIS</Typography></TableCell>
                                <TableCell align="right" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees?.map(employee => (
                                <TableRow key={employee.id}>
                                    <TableCell component="th" scope="row">
                                        <Box display="flex" flexDirection="column">
                                            <Typography>
                                                {EmployeeHelper.getFullName(employee)}
                                            </Typography>
                                            <Typography variant="caption">
                                                {employee.email}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">{employee.nis}</TableCell>
                                    <TableCell align="right">
                                        <Box display="flex" justifyContent="flex-end">
                                            <IconButton onClick={() => editEmployee(employee)}>
                                                <EditOutlinedIcon />
                                            </IconButton>

                                            <IconButton onClick={() => handleDeleteEmployee(employee)}>
                                                <DeleteOutlinedIcon color="error" />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>

            <FormEmployee formError={formError} employee={employeeEdit} setEmployeeEdit={setEmployeeEdit} handleChangeForm={handleChangeForm} handleSave={handleSaveForm} />
            <DeleteAlert employee={employeeDelete} setEmployeeDelete={setEmployeeDelete} deleteEmployee={deleteEmployee} />
        </Box>
    )
}
