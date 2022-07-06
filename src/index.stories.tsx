import React from 'react';
import { Stack, Button } from '@mui/material';
import { storybookSetupTemplate } from '@utilities/storybook';

const template = storybookSetupTemplate((args) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
});

export const ButtonTest = template();

export default {
  title: 'Testing',
};
