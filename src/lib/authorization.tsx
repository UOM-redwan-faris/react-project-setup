import React from "react";
import { useAuth } from "./auth";

export enum ROLES {
  userRole1 = "userRole1",
  userRole2 = "userRole2",
}
type RoleTypes = keyof typeof ROLES;

export const useAuthorization = () => {
  const { user } = useAuth();

  if (!user) {
    throw Error("User does not exist!");
  }

  const checkAccess = React.useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      const userRole = user.role.toLowerCase();
      const allowedRolesLowerCase = allowedRoles.map((role) =>
        role.toLowerCase()
      );
      if (allowedRoles && allowedRoles.length > 0 && userRole) {
        return allowedRolesLowerCase.includes(userRole);
      }

      return true;
    },
    [user]
  );

  return { checkAccess, role: user.role };
};

type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
  | {
      allowedRoles: RoleTypes[];
      policyCheck?: never;
    }
  | {
      allowedRoles?: RoleTypes[];
      policyCheck: boolean;
    }
);

export const Authorization = ({
  policyCheck,
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();
  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  if (typeof policyCheck !== "undefined") {
    canAccess = policyCheck;
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};
