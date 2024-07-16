import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sampleUsers, UserFields } from "@/data/users";
import { UserEditForm } from "./user-edit";

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
  const [users, setUsers] = useState(sampleUsers);

  return (
    <>
     <UserEditForm user={users[0]}/>
     <Table>
      <TableHeader>
        <TableRow>
          {TABLE_COLUMNS.map((column) => (
            <TableHead key={column.display}>{column.display}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            {TABLE_COLUMNS.map((column) => (
              <TableCell key={column.field} className="text-start">
                {user[column.field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
   
  );
}
