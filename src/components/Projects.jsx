import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { BsEyeFill } from 'react-icons/bs'
import ThirdEye from './projectsInfo/ThirdEye';
function Projects() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <div className='homeElement'>
      <Box sx={{padding: 2,borderRadius: 1,display: 'flex', backgroundColor: "white", color: "black", width: '80%', height: '80%', margin: "auto" }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          sx={{minWidth: 0.2}}
          orientation="vertical"
          textColor='black'
          TabIndicatorProps={{  sx: { backgroundColor: "black" }}}
          
        >
          <Tab icon={<BsEyeFill/>} label="Third Eye"  sx={{fontSize: '1.1em'}}/>
          <Tab label="ABC Cashier POS" sx={{fontSize: '1.1em'}}/>
          <Tab label="Tab 3" sx={{fontSize: '1.1em'}}/>
        </Tabs>
        <Box sx={{ margin: 2, width: "100%", height:"100%" }}>
          {tabIndex === 0 && (
            <Box>
              <ThirdEye/>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <Typography>The second tab</Typography>
            </Box>
          )}
          {tabIndex === 2 && (
            <Box>
              <Typography>The third tab</Typography>
            </Box>
          )}
        </Box>
    </Box>
    </div>

  );
}

export default Projects;