import * as React from "react";
import { useRecordContext } from 'react-admin';
import { Chip } from '@mui/material';

export const CustomCompleted = ({ source }) => {
    const record = useRecordContext();
    
    return record ? (
        <Chip label={record[source] ? 'true' : 'false'} sx={{color: 'red'}} />
    ) : null;
}