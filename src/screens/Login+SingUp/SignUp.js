import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../assets/ig.png'

import { TextFieldStyled, ButtonStyled, FormContainer, EditarEnderecoStyled, PerfilStyled } from '../Perfil/EditarEndereco/styles';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { signup } from '../../services/user';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const SignUp = () => {
  useUnprotectPage();
  const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: ""});
  const history = useHistory();

  const onChangeForm = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form.name + form.value + " e " + history);

    signup(form, history);
  }

  // const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      {/* <div >
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <img src={logo} alt=""/>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div> */}
      
      <PerfilStyled>
        <FormContainer
          onSubmit={onSubmitForm}
        >
            <div >
              <Avatar >
                <LockOutlinedIcon />
              </Avatar>
              <img src={logo} alt=""/>
            </div>

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <TextFieldStyled
            name="name"
            variant="outlined"
            label="Nome*"
            value={form.name}
            onChange={onChangeForm}
            />
            <TextFieldStyled
            name="email"
            variant="outlined"
            label="E-mail*"
            value={form.email}
            onChange={onChangeForm}
            />
            <TextFieldStyled
            type="cpf"
            name="cpf"
            variant="outlined"
            label="CPF*"
            value={form.cpf}
            onChange={onChangeForm}
            />
            <TextFieldStyled
            type="password"
            name="password"
            variant="outlined"
            label="Senha*"
            value={form.password}
            onChange={onChangeForm}
            />
            <ButtonStyled
            variant="contained"
            type="submit"
            color="primary"
            >
                Cadastrar
            </ButtonStyled>

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </FormContainer>
      </PerfilStyled>
    </Container>
  );
}

export default SignUp