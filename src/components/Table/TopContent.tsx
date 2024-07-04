"use client";
import React from "react";
import {
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Selection,
  Tooltip,
} from "@nextui-org/react";

import { columns, statusOptions } from "@/components/Table/ScanWeb/data";
import { capitalize } from "@/components/Table/ScanWeb/utils";
import { SearchIcon } from "@/components/Table/ScanWeb/SearchIcon";
import { ChevronDownIcon } from "@/components/Table/ScanWeb/ChevronDownIcon";
import { PlusIcon } from "@/components/Table/ScanWeb/PlusIcon";

type TopContentProps = {
  filterValue: string;
  onSearchChange: (value?: string) => void;
  setFilterValue: (value: string) => void;
  statusFilter: Selection;
  setStatusFilter: (selection: Selection) => void;
  visibleColumns: Selection;
  setVisibleColumns: (selection: Selection) => void;
  usersLength: number;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TopContent: React.FC<TopContentProps> = ({
  filterValue,
  onSearchChange,
  setFilterValue,
  statusFilter,
  setStatusFilter,
  visibleColumns,
  setVisibleColumns,
  usersLength,
  onRowsPerPageChange,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%]",
            inputWrapper: "border-none", // Hilangkan border
            input: "border-none shadow-none", // Tambahan untuk menghilangkan border pada input
          }}
          placeholder="Cari Dengan Nama..."
          size="md"
          startContent={<SearchIcon className="text-default-300" />}
          value={filterValue}
          variant="underlined"
          onClear={() => setFilterValue("")}
          onValueChange={onSearchChange}
        />
        <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<ChevronDownIcon className="text-medium" />}
                size="md"
                variant="flat">
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}>
              {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {capitalize(status.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<ChevronDownIcon className="text-medium" />}
                size="md"
                variant="flat">
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}>
              {columns.map((column) => (
                <DropdownItem key={column.uid} className="capitalize">
                  {capitalize(column.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            className="bg-primary text-background"
            endContent={<PlusIcon width={20} height={20} />}
            size="md">
            Tambah Baru
          </Button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <span className="text-default-400 text-small">
          Total {usersLength} pengguna
        </span>
        <label className="flex items-center text-default-400 text-small mt-2 sm:mt-0">
          Baris per halaman:
          <select
            className="bg-transparent outline-none text-default-400 text-small ml-1"
            onChange={onRowsPerPageChange}>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default TopContent;
