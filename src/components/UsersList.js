import React, { Fragment, useContext } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import UsersContext from "../store/users-context";

import styles from "./UsersList.module.css";

const UsersList = () => {
  const usersCtx = useContext(UsersContext);

  return (
    <div className={styles.userList}>
      <h1></h1><br></br>
      <div className={styles.tableFlow}>
        <form>
          <table>
            <thead>
              <tr>
                <th>Produits</th>
                <th>Quantités</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usersCtx.users.map((user) => (
                <Fragment key={user.id}>
                  {usersCtx.editUserId === user.id ? (
                    <EditableRow />
                  ) : (
                    <ReadOnlyRow user={user} />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UsersList;