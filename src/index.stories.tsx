import React from 'react';
import { Stack, Button, Badge } from '@mui/material';
import { storybookSetupTemplate } from '@library/storybook';
import { TreeContextProvider, useTreeState } from './assets';

const template = storybookSetupTemplate((args) => {
  return (
    <TreeContextProvider>
      <TestGroup />
    </TreeContextProvider>
  );
});

const TestGroup = React.memo(() => {
  const counter = useTreeState('count');
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="primary">
        <Button
          variant="text"
          onClick={() => {
            counter((counter() || 0) + 1);
          }}
        >
          {counter() || 0}
        </Button>
      </Badge>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
});

export const ButtonTest = template();

export default {
  title: 'Testing',
};
