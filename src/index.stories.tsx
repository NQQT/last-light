import React from 'react';
import { Badge, Button, Stack } from '@mui/material';
import { storybookSetupTemplate } from '@library/storybook';
import { createReactContextState } from '@common/assets';
import { useMemory } from '@common/assets/src/hooks/memory';

const [ContextProvider, useContext] = createReactContextState({
  count: 0,
});

const updateCount = (count) => useContext({ count });

const template = storybookSetupTemplate((args) => {
  return (
    <ContextProvider>
      <TestGroup />
    </ContextProvider>
  );
});

const TestGroup = React.memo(() => {
  const memory = useMemory({
    count: 1,
    level: { start: 1 },
  });

  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="primary">
        <Button
          variant="text"
          onClick={() => {
            memory.level.start++;
          }}
        >
          {memory.level.start}
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
