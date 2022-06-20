import { BooleanField, Datagrid, List, ReferenceField, TextField } from 'react-admin';
import { CustomCompleted } from './CustomCompleted';

export const TodoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <BooleanField source="completed" />
            <CustomCompleted source="completed" />
        </Datagrid>
    </List>
);