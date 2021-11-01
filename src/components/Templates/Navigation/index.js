import React, {useState} from 'react';
import ToolbarComponent from "./ToolbarComponent";
import DrawerComponent from "./DrawerComponent";


export default function Navigation() {
    const [left, setLeft] = useState(false)
    const toggleDrawer = () => {
        setLeft(false)
    };

    const openDrawer = () => {
        setLeft(true)
    };

    return (
        <div>
            <ToolbarComponent openDrawerHandler={openDrawer}/>
            <DrawerComponent
                left={left}
                toggleDrawerHandler={toggleDrawer}
            />
        </div>
    );
}

