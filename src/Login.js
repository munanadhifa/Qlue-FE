import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography, Container, InputAdornment, IconButton } from '@material-ui/core'
import { TextField, OutlinedInput, FormControl } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios';

export default function Login() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const cardlogin = {
    width: "500px",
    marginTop: "200px"
  };
  const email = {
    textAlign: 'left',
    marginLeft: '20px'
  }
  const password = {
    textAlign: 'left',
    marginLeft: '20px',
    paddingTop: '20px'
  }
  const btn = {
    placeContent: 'center'
  }



  // const handleChange = (prop) => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password
    }

    axios.post('https://ayodhya-dev.qlue.id/api/auths/login', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container fixed>
      <div className="login-page" style={{ textAlign: '-webkit-center' }} >
        <Card style={cardlogin}>
          <form onSubmit={handleSubmit}>
            <CardContent>

              <Typography style={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                Log In
              </Typography>
              <div className="email" style={email}>
                <FormControl variant="outlined">
                  <Typography variant="h7" component="div">
                    Email
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Your Email"
                    multiline
                    variant="outlined"
                    style={{ width: '450px', paddingTop: '10px' }}
                    onChange={e => this.email = e.target.value}
                  />
                </FormControl>
              </div>
              <div className="password" style={password}>
                <FormControl variant="outlined">
                  <Typography variant="h7" component="div">
                    Password
                  </Typography>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    // onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    style={{ width: '450px', marginTop: '10px' }}

                  />
                </FormControl>

              </div>
            </CardContent>
            <CardActions style={btn}>
              <Link to={`/dashboard`} style={{ textDecoration: 'none' }}>
                <Button variant="outlined" type="submit" style={{ background: 'rgb(33, 150, 243)', color: 'white' }}>Submit</Button>
              </Link>
            </CardActions>
          </form>
        </Card>


      </div>
    </Container>


  )
}

