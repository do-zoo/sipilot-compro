import { Button, Stack, Text } from '@mantine/core'
import { ContextModalProps } from '@mantine/modals'
export const ModalSubscribeSuccess = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <Stack>
    <Text size="sm" align="center">
      {innerProps.modalBody}
    </Text>
    <Button fullWidth size="md" onClick={() => context.closeModal(id)}>
      Close
    </Button>
  </Stack>
)
