"use client";
import React, { useState, useMemo, useCallback, ChangeEvent } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Selection,
  SortDescriptor,
} from "@nextui-org/react";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";
import { columns, statusOptions } from "@/components/Table/ScanWeb/data";
import RenderCell from "./RenderCell";

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "target",
  "status",
  "actions",
  "email",
  "team",
];

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  team: string;
  status: string;
  target: string;
  [key: string]: any;
}

interface TableUiProps {
  data: User[];
}

const TableUi: React.FC<TableUiProps> = ({ data }) => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = useState<number>(1);

  const pages = useMemo(
    () => Math.ceil(data.length / rowsPerPage),
    [data.length, rowsPerPage]
  );
  const hasSearchFilter = useMemo(() => Boolean(filterValue), [filterValue]);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...data];
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }
    return filteredUsers;
  }, [hasSearchFilter, statusFilter, filterValue, data]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = [sortDescriptor.column as keyof User] as unknown as number;
      const second = [sortDescriptor.column as keyof User] as unknown as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    setFilterValue(value || "");
    setPage(1);
  }, []);

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "w-full", "table-responsive"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <div>
      <TopContent
        filterValue={filterValue}
        onSearchChange={onSearchChange}
        setFilterValue={setFilterValue}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        usersLength={data.length}
        onRowsPerPageChange={onRowsPerPageChange}
      />
      <div className="overflow-x-auto">
        <Table
          isCompact
          removeWrapper
          className="table-responsive"
          aria-label="Contoh tabel dengan sel kustom, paginasi, dan penyortiran"
          checkboxesProps={{
            classNames: {
              wrapper:
                "after:bg-foreground after:text-background text-background",
            },
          }}
          classNames={classNames}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}>
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                allowsSorting={column.sortable}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            className="table-responsive"
            emptyContent={"Tidak ada Log yang Sesuai"}
            items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>
                    <RenderCell
                      user={item}
                      columnKey={columnKey as keyof User}
                    />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <BottomContent
        hasSearchFilter={hasSearchFilter}
        page={page}
        pages={pages}
        selectedKeys={selectedKeys}
        itemsLength={items.length}
        setPage={setPage}
      />
    </div>
  );
};

export default TableUi;
