import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function FormEmployee(props) {
    const { employee } = props;

    return (
        <Dialog onClose={() => props.setEmployeeEdit(null)} open={employee ? true : false} maxWidth="xs" fullWidth>
            <DialogTitle>
                <Typography align="center" style={{ fontWeight: "Bold", fontSize: "29px" }}>
                    {employee?.id ? "Editar Funcionário" : "Novo funcionário"}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box p={3} justifyContent="space-between" display="flex" flexDirection="column" style={{ height: "260px" }}>

                    <TextField
                        label="Nome"
                        name="name"
                        variant="outlined"
                        onChange={(e) => props.handleChangeForm(e)}
                        value={employee?.name ? employee?.name : ""}
                        fullWidth />

                    <TextField
                        label="Sobrenome"
                        name="surname"
                        variant="outlined"
                        onChange={(e) => props.handleChangeForm(e)}
                        value={employee?.surname ? employee?.surname : ""}
                        fullWidth />

                    <TextField
                        label="E-mail"
                        name="email"
                        variant="outlined"
                        onChange={(e) => props.handleChangeForm(e)}
                        value={employee?.email ? employee?.email : ""}
                        fullWidth />

                    <TextField
                        type="number"
                        label="Nis/Pis"
                        name="nis"
                        variant="outlined"
                        onChange={(e) => props.handleChangeForm(e)}
                        value={employee?.nis ? employee?.nis : ""}
                        fullWidth />
                </Box>
                {props.formError ? (
                    <Typography align="center" variant="caption" color="error">
                        {props.formError}
                    </Typography>
                ) : null}
            </DialogContent>
            <DialogActions>
                <Button fullWidth variant="contained" color="primary" onClick={() => props.setEmployeeEdit(null)}>
                    Cancelar
                </Button>
                <Button fullWidth variant="contained" color="primary" onClick={props.handleSave}>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
