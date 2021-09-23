import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography, Container} from '@material-ui/core'
import { TextField, OutlinedInput, FormControl } from '@material-ui/core'
// import axios from 'axios';

export default function Login() {

  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");

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
  const history = useHistory();
  

  async function login()
  {
    console.warn(Email, Password)
    let item = { Email, Password};
    let res = await fetch("https://ayodhya-dev.qlue.id/api/auths/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify(item)
    });
    res = await res.json()
    localStorage.setItem("user-info", JSON.stringify(res))
    history.push("/dashboard")
  }

  
  

  //   const data = {
  //     email: this.email,
  //     password: this.password
  //   }

  //   axios.post('https://ayodhya-dev.qlue.id/api/auths/login', data)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  return (
    <Container fixed>
      <div className="login-page" style={{ textAlign: '-webkit-center' }} >
        <Card style={cardlogin}>
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
                    onChange={e => setEmail(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Your Password"
                    type="password"
                    style={{ width: '450px', marginTop: '10px' }}

                  />
                </FormControl>

              </div>
            </CardContent>
            <CardActions style={btn}>
              {/* <Link to={`/dashboard`} style={{ textDecoration: 'none' }} onClick={login}> */}
                <Button onClick={login} variant="outlined" type="submit" style={{ background: 'rgb(33, 150, 243)', color: 'white' }}>Submit</Button>
              {/* </Link> */}
            </CardActions>
        </Card>
      </div>
    </Container>


  )
}

