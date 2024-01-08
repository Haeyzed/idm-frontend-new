import React from "react";
import styled from "styled-components";
import {
  FiCalendar,
  FiClock,
  FiFile,
  FiFilter,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";
import Input from "./Input";
import Select from "./Select";

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Filter = ({ filterParams, onFilterChange }) => {
  return (
    <FilterGrid>
      <Input
        name="term"
        lefticon={<FiSearch />}
        type="text"
        placeholder="Search users..."
        value={filterParams.term}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
      />
      <Input
        name="per_page"
        lefticon={<FiFile />}
        type="text"
        placeholder="Per Page"
        value={filterParams.per_page}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
      />
      <Input
        name="order_by"
        lefticon={<FiFilter />}
        type="text"
        placeholder="Order By"
        value={filterParams.order_by}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
      />
      <Input
        name="sort_by"
        lefticon={<FiFilter />}
        type="text"
        placeholder="Sort By"
        value={filterParams.sort_by}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
      />
      <Input
        name="period"
        lefticon={<FiClock />}
        type="text"
        placeholder="Period"
        value={filterParams.period}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
      />
      <Input
        name="start_date"
        lefticon={<FiCalendar />}
        type="date"
        placeholder="Start Date"
        value={filterParams.start_date}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
      />
      <Input
        name="end_date"
        lefticon={<FiCalendar />}
        type="date"
        placeholder="End Date"
        value={filterParams.end_date}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        margin="5px 0 5px 0"
      />
      <Select
        name="trashed"
        placeHolder="Trashed"
        lefticon={<FiTrash2 />}
        options={[
          { value: 1, label: "Trashed" },
          { value: 0, label: "Not Trashed" },
        ]}
        multiple={false}
        searchable={true}
        onChange={(fieldName, newValue) =>
          onFilterChange(fieldName, newValue)
        }
        align="left"
        margin="5px 0 5px 0"
      />
    </FilterGrid>
  );
};

export default Filter;
