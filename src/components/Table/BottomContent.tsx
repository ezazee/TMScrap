"use client";
import React from "react";
import { Pagination, Selection } from "@nextui-org/react";

type BottomContentProps = {
  hasSearchFilter: boolean;
  page: number;
  pages: number;
  selectedKeys: Selection;
  itemsLength: number;
  setPage: (page: number) => void;
};

const BottomContent: React.FC<BottomContentProps> = ({
  hasSearchFilter,
  page,
  pages,
  selectedKeys,
  itemsLength,
  setPage,
}) => {
  return (
    <div className="py-2 px-2 flex flex-col sm:flex-row justify-between items-center gap-2">
      <Pagination
        showControls
        classNames={{ cursor: "bg-foreground text-background" }}
        color="default"
        isDisabled={hasSearchFilter}
        page={page}
        total={pages}
        variant="light"
        onChange={setPage}
      />
      <span className="text-small text-default-400 text-center sm:text-left">
        {selectedKeys === "all"
          ? "Semua item terpilih"
          : `${selectedKeys.size} dari ${itemsLength} terpilih`}
      </span>
    </div>
  );
};

export default BottomContent;
