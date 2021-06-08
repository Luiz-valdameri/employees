import { Button, Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core'
import React from 'react'
import EmployeeHelper from '../../../helpers/EmployeeHelper'

export default function DeleteAlert(props) {
    const { employee } = props;

    return (
        <Dialog onClose={() => props.setEmployeeDelete(null)} open={employee ? true : false}>
            <DialogContent style={{ padding: "30px" }}>
                <Typography variant="h4" align="center">
                    Tem certeza que deseja excluir {EmployeeHelper.getFullName(props.employee)}?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    style={{ marginRight: "10px", padding: "5px 25px" }}
                    onClick={() => props.setEmployeeDelete(null)}>
                    Não
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: "10px", padding: "5px 25px" }}
                    onClick={() => props.deleteEmployee(employee.id)}>
                    Sim
                    </Button>
            </DialogActions>
        </Dialog>
    )
}
