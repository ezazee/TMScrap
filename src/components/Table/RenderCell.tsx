import React from "react";
import { Chip, User, Tooltip, ChipProps } from "@nextui-org/react";
import { EyeIcon } from "./ScanWeb/EyeIcon";
import { EditIcon } from "./ScanWeb/EditIcon";
import { DeleteIcon } from "./ScanWeb/DeleteIcon";

interface UserProps {
  id: number;
  name: string;
  email: string;
  role: string;
  team: string;
  status: string;
  target: string;
  [key: string]: any;
}

interface RenderCellProps {
  user: UserProps;
  columnKey: keyof UserProps;
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  success: "success",
  failed: "danger",
  vacation: "warning",
};

const RenderCell: React.FC<RenderCellProps> = ({ user, columnKey }) => {
  const cellValue = user[columnKey];

  switch (columnKey) {
    case "name":
      return (
        <User
          classNames={{ description: "text-default-500" }}
          description={user.email}
          name={cellValue}>
          {user.email}
        </User>
      );
    case "role":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-small capitalize">{cellValue}</p>
          <p className="text-bold text-tiny capitalize text-default-500">
            {user.team}
          </p>
        </div>
      );
    case "status":
      return (
        <Chip
          className="capitalize border-none gap-1 text-default-600"
          color={statusColorMap[user.status] || "default"}
          size="sm"
          variant="dot">
          {cellValue}
        </Chip>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Detail">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content="Edit">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Hapus">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return <span>{cellValue}</span>;
  }
};

export default RenderCell;
