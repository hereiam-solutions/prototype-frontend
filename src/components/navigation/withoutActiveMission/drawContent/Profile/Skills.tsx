import React from 'react'
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";

import styled from 'styled-components';

import skills from './SkillList';

export type SkillType = {
  id: number;
  category: string;
  date: string;
  titel: string;
  institution: string;
  confirmation: string;
  name: string;
  selector: string;
  sortable: boolean;
  right: boolean;
  columns: any;
  customStyles: any;
  defaultSortField: string;
};

export const columns = [
  {
    name: "Category",
    selector: "category",
    sortable: true
  },
  {
    name: "Date",
    selector: "date",
    sortable: true
  },
  {
    name: "Titel",
    selector: "titel",
    sortable: true,
    right: true
  },
  {
    name: "Institution",
    selector: "institution",
    sortable: true
  }
];

const Skills = ({ id, category, date, titel, institution, confirmation, columns }: SkillType) => {

  const customStyles = {

    rows: {
      style: {
          minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
      },
    },
    cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
    },
  
  };

  return (

    <StyledSkillsWrapper>

      <SectionHeadline>
        My Skills and Certifications
      </SectionHeadline>
{/** not working yet
      <DataTable
          title="Skills"
          columns={columns}
          data={skills}
          defaultSortFieldId="institution"
          pagination
          selectableRows
          customStyles={customStyles}
      />
*/}

    </StyledSkillsWrapper>
  );
};

const StyledSkillsWrapper = styled.div`
  margin-top: 2rem;
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-bottom: 1px solid ${(props) => props.theme.sectionHeadlineBackgroundColor};

  pointer-events: auto;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  li {
    width: 90vw;
    padding: 1rem;
  }

  table {
    border: 1px solid gray;
    margin-bottom: 20px;
  }
  
  tbody > tr:nth-child(2n) {
    background: lightblue;
  }
`;

const SectionHeadline = styled.div`
    width: 90vw;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    border-radius: ${(props) => props.theme.buttonBorderRadius} ${(props) => props.theme.buttonBorderRadius} 0 0;

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default Skills;