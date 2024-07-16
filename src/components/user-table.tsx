import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sampleUsers, UserFields, User } from "@/data/users";
import { UserEditFormDialog } from "./user-edit";
import { generateRandomId } from "@/lib/utils";

const TABLE_COLUMNS: { display: string; field: UserFields }[] = [
  { display: "ID", field: "id" },
  { display: "Name", field: "name" },
  { display: "Email", field: "email" },
  { display: "Role", field: "role" },
  { display: "Status", field: "status" },
  { display: "Sign Up Date", field: "signUpDate" },
  { display: "Last Login", field: "lastLogin" },
];

export function UserTable() {
  const [users, setUsers] = useState(
    // using an internal _id to allow id field changes without key conflict
    sampleUsers.map((u) => ({ ...u, _id: generateRandomId() }))
  );

  const updateUser = (_id: string, user: User) => {
    setUsers((u) =>
      [...u].map((u) => (u._id === _id ? { ...user, _id: _id } : u))
    );
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {TABLE_COLUMNS.map((column) => (
              <TableHead key={column.display}>{column.display}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              {TABLE_COLUMNS.map((column) => (
                <TableCell key={column.field} className="text-start">
                  {user[column.field]}
                </TableCell>
              ))}
              <TableCell>
                <UserEditFormDialog
                  user={user}
                  handleSubmit={(data) => updateUser(user._id, data)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
