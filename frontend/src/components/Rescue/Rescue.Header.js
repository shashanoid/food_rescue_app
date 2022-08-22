import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import { formatTimestamp } from 'helpers'
import { useRescueContext } from './Rescue'

export function RescueHeader() {
  const { rescue } = useRescueContext()

  return (
    <>
      <Flex pt="2" pb="8" align="center">
        <Avatar src={rescue?.handler?.icon} name={rescue?.handler?.name} />
        <Box w="4" />
        <Flex direction="column">
          <Heading as="h4" size="md" mb="4px" color="element.primary">
            {rescue?.handler?.name || 'Available'}
          </Heading>
          <Text color="element.secondary" fontSize="xs">
            {formatTimestamp(
              rescue.timestamp_scheduled_start,
              'dddd, MMMM DD | h:mma'
            )}
            {formatTimestamp(rescue.timestamp_scheduled_finish, ' - h:mma')}
          </Text>
          {rescue.notes && (
            <Text color="element.secondary" fontSize="xs">
              Notes: {rescue.notes}
            </Text>
          )}
        </Flex>
      </Flex>
    </>
  )
}
