import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function NavigationSidebar() {
  return (
    <List>
      <ListItem button component={Link} to="/dashboard">Dashboard</ListItem>
      <ListItem button component={Link} to="/jobs">Jobs</ListItem>
      <ListItem button component={Link} to="/jobs/view">View Existing</ListItem>
      <ListItem button component={Link} to="/jobs/add">Add New</ListItem>
      <ListItem button component={Link} to="/personnel">Personnel</ListItem>
      <ListItem button component={Link} to="/customers">Customers</ListItem>
      <ListItem button component={Link} to="/sites">Sites</ListItem>
      // Add more items as needed
    </List>
  );
}