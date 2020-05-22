import React from 'react';
import { Table } from 'semantic-ui-react';

const PilotListRow = ({pilot={}}) => {
  console.log(pilot)

    const {
        name = "",
        rank = "",
        age = "",
        gunnery = "",
        piloting = "",
        mechType = "",
    } = pilot;

    return (
        <Table.Row>
          <Table.Cell>
            {name}
          </Table.Cell>
          <Table.Cell>
            {rank}
          </Table.Cell>
          <Table.Cell>
            {age}
          </Table.Cell>
          <Table.Cell>
            {gunnery} / {piloting}
          </Table.Cell>
          <Table.Cell>
            {mechType}
          </Table.Cell>

        </Table.Row>
    )
}

export default PilotListRow;
