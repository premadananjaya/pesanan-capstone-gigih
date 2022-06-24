import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import logo from './logo.png';

const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'85vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0', backgroundColor:'#371B58'}
    const logoApp={padding :20, height:'13vh',width:240, margin:"0 auto"}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={logoApp}src={logo}><LockOutlinedIcon/></Avatar>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> 
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password?
                </Link>
                </Typography>
                <Typography > Do you have an account?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login