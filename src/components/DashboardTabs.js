import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import InterviewTab from './InterviewTab';
import Statistics from './Statistics';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';





const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function DashboardTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <TabContext value={value}>
        <Paper className={classes.root}>
        
          {/* <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Interviews" />
            <Tab label="statistics" />
          </Tabs> */}
          <TabList onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary" textColor="primary" centered>
            <Tab label="Interview" value={0} />
            <Tab label="Statistics" value={1} />
          </TabList>
        </Paper>
        <TabPanel value={0}><InterviewTab /> </TabPanel>
        <TabPanel value={1}><Statistics /></TabPanel>
      </TabContext>
      
      
    </React.Fragment>
  );
}