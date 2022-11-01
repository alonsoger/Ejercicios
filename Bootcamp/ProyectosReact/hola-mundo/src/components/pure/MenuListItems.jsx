import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Home, Settings, Task} from '@mui/icons-material';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME': 
            return (<Home/>);
        case 'TASKS': 
            return (<Home/>);
        case 'SETTINGS': 
            return (<Home/>);
        default:
            return (<Home/>);
    }
}

const MenuListItems = ({list}) => {

    const navigate = useNavigate();

    return (
        <List>
            {list.map(({text, path, icon}, index) =>
                (
                    <ListItem key={index} button onClick={() => navigate(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText 
                            primary={text}>
                        </ListItemText>
                    </ListItem>
                )
            )}
        </List>
    )
}

export default MenuListItems;