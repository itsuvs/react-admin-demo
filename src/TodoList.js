import { BooleanField, Datagrid, List, ReferenceField, TextField, EditButton } from 'react-admin'
import { CustomCompleted } from './CustomCompleted'
import { ToDoFilters } from './ToDoFilters'

export const TodoList = () => (
    <List filters={ToDoFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <BooleanField source="completed" />
            <CustomCompleted source="completed" />
            <EditButton/>
        </Datagrid>
    </List>
);