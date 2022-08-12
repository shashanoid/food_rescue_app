import { SearchIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import { Page } from 'chakra_components'
import { useApi } from 'hooks'
import { useState } from 'react'

export function Users() {
  const { data: users } = useApi('/publicProfiles')

  return (
    <Page
      id="People"
      title="People"
      breadcrumbs={[{ label: 'People', link: '/chakra/people' }]}
    >
      <Heading
        as="h1"
        fontWeight="700"
        size="2xl"
        mb="24px"
        textTransform="capitalize"
        color="element.primary"
      >
        People
      </Heading>
      <SearchBox />
      {users &&
        users
          // .filter(i => i.name.includes(searchValue))
          .map((user, i) => (
            <Box key={i}>
              <UserCard user={user} />
              {i !== users.length - 1 && <Divider />}
            </Box>
          ))}
    </Page>
  )
}

function SearchBox() {
  const [searchValue, setSearchValue] = useState('')

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  return (
    <InputGroup mb="6">
      <InputLeftElement
        children={<SearchIcon />}
        mr="2"
        color="element.secondary"
      />
      <Input
        placeholder="Search by name..."
        value={searchValue}
        onChange={handleChange}
      />
    </InputGroup>
  )
}

function UserCard({ user }) {
  return (
    <Flex justify="start" align="center" py="4">
      <Avatar src={user?.icon} name={user?.name} />
      <Flex direction="column" ml="4">
        <Heading as="h2" size="md" fontWeight="600" color="element.primary">
          {user?.name || 'User'}
        </Heading>
        <Text color="element.secondary" fontSize="xs">
          {user?.email || 'Email'}
        </Text>
      </Flex>
      <Text ml="auto">{permissionIcon(user?.permission)}</Text>
    </Flex>
  )
}

function permissionIcon(permission) {
  return permission === 'admin' ? '👑' : permission === 'standard' ? '🚛' : ''
}
