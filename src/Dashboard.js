import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Container } from '@material-ui/core'
import Chart from "react-google-charts";
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { ArrowDownward, ChevronLeft, ChevronRight, FirstPage, LastPage, Search, Clear } from "@material-ui/icons";



export default function Dashboard() {
  
  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  };

  return (
    <Container fixed>
      <div className="table">
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '120px', marginBottom: '40px' }}>

          <MaterialTable
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'Code', field: 'code' },
              { title: 'Population', field: 'population', type: 'numeric' }
            ]}
            data={[
              { name: 'India', code: 'IN', population: 1324171354 },
              { name: 'China', code: 'CN', population: 1403500365 },
              { name: 'Italy', code: 'IT', population: 60483973 },
              { name: 'United States', code: 'US', population: 327167434 },
              { name: 'Canada', code: 'CA', population: 37602103 },
              { name: 'Australia', code: 'AU', population: 25475400 },
              { name: 'Germany', code: 'DE', population: 83019200 },
              { name: 'Ireland', code: 'IE', population: 4857000 },
              { name: 'Mexico', code: 'MX', population: 126577691 },
              { name: 'Japan', code: 'JP', population: 126317000 },
              { name: 'France', code: 'FR', population: 67022000 },
              { name: 'United Kingdom', code: 'GB', population: 67545757 },
              { name: 'Russia', code: 'RU', population: 146793744 },
              { name: 'Nigeria', code: 'NG', population: 200962417 },
              { name: 'Brazil', code: 'BR', population: 210147125 },
            ]}
            options={{
              search: true
            }}
            icons={tableIcons}
          />
        </Paper>
      </div>

      <div classname="graph" style={{ textAlign: '-webkit-center' }} >
        <Chart
          width={'900px'}
          height={'500px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['City', 'Population'],
            ['India, IN', 1324171354],
            ['China, CN', 1403500365],
            ['Italy, IT', 60483973],
            ['United States, US', 327167434],
            ['Australia, AU', 25475400],
            ['Germany, DE', 83019200],
            ['Japan, JP', 126317000],
            ['France, FR', 67022000],
            ['United Kingdom, GB', 67545757],
            ['Russia, RU', 146793744],
          ]}
          options={{
            title: 'Population',
            chartArea: { width: '50%' },
            // hAxis: {
            //   title: 'Total Population',
            //   minValue: 0,
            // },
            // vAxis: {
            //   title: 'City',
            // },
          }}
          // For tests
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </Container>
  );
}