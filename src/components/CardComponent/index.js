import React from "react";
import {Card, CardContent} from '@mui/material';

export default function CardComponent(props) {
    return (
        <Card className={props.cardClass || ""}>
            <CardContent className={props.cardContentClass || ""}>
                {props.content || ""}
            </CardContent>
        </Card>
    );

}

