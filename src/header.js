import { Button, Box, Affix, Group, TextInput } from '@mantine/core';
import {Outlet, useNavigate} from 'react-router-dom';


const Header = ()=>{
  const navigate = useNavigate();
  return(
    <div style={{backgroundColor:"blue", height:200, width:"100%", position:"fixed", left:0, bottom:0}}>
      <Box sx={{margin: 20}}>
        <div style={{height:30}}>Add New
          <Affix position={{ top: 10, right: 20 }}>
              <Button type="button" onClick={()=>navigate(-1)}>Back</Button>
          </Affix>
        </div>

        <Outlet />
        <hr></hr>
      </Box>
    </div>
  );
}
export default Header;