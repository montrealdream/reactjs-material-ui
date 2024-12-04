import { TextField, Button, Alert, Container, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { IoMdLogIn } from "react-icons/io";
import { MdNearbyError } from "react-icons/md";
import { BsShieldCheck, BsShieldFillCheck } from "react-icons/bs";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const FormRegister = () => {
  const [alert, setAlert] = useState(null);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if(!email) {
      setAlert({
        type: "error",
        content: "Vui lòng nhập email!"
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      return;
    }

    if(!password) {
      setAlert({
        type: "error",
        content: "Vui lòng nhập mật khẩu!"
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      return;
    }

    if(email && password) {
      console.log(email);
      console.log(password);
    }
  }

  return (
    <>
      {alert && (
        <Alert 
          severity={alert.type}
          icon={<MdNearbyError />}
          sx={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: "999"
          }}
        >
          {alert.content}
        </Alert>
      )}

      <form 
        onSubmit={handleRegister}
        style={{
          width: "400px",
          margin: "50px auto"
        }}
      >
        <h1 className="title-1">Đăng Ký</h1>

        <Typography variant="h1" style={{fontSize: "30px"}}>
          <AccountCircleIcon fontSize='large' /> Đăng Ký
        </Typography>

        <TextField
          variant="outlined"
          label="Email"
          color="warning"
          fullWidth
          name="email"
          type="email"
          placeholder="Ví dụ: levana@gmail.com"
          margin='normal'
        />

        <TextField
          variant="outlined"
          label="Password"
          color="warning"
          fullWidth
          name="password"
          type="password"
          margin='normal'
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Nữ" />
            <FormControlLabel value="male" control={<Radio />} label="Nam" />
            <FormControlLabel value="other" control={<Radio />} label="Khác" />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Giới tính"
          >
            <MenuItem value="male">Nam</MenuItem>
            <MenuItem value="female">Nữ</MenuItem>
            <MenuItem value="other">Khác</MenuItem>
          </Select>
        </FormControl>

        <FormGroup>
          <FormControlLabel 
            control={
              <Checkbox
                icon={<BsShieldCheck />}
                checkedIcon={<BsShieldFillCheck />}
              />
            } 
            label="Đồng ý với điều khoản của chúng tôi..." 
          />
        </FormGroup>

        <Button 
          variant="contained"
          color="warning"
          size="medium"
          endIcon={<IoMdLogIn />}
          disabled={false}
          fullWidth
          type="submit"
        >
          Đăng Ký
        </Button>
      </form>

      {/* <Container>
        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
      </Container> */}
    </>
  )
}