import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from 'hooks'
import { Card, Spacer, Text } from '@sharingexcess/designsystem'

export function NewDriver() {
  const { user } = useAuth()

  const completed_availability =
    user.availability &&
    Object.keys(user.availability).filter(key => user.availability[key]).length

  const sections = [
    {
      name: 'Complete your Profile',
      page: '/profile',
      completed:
        user.name &&
        user.phone &&
        user.pronouns &&
        completed_availability &&
        user.availability &&
        user.driver_info.vehicle_make_model &&
        user.driver_info.license_number &&
        user.driver_info.license_state &&
        user.driver_info.insurance_policy_number &&
        user.driver_info.insurance_provider,
    },
    {
      name: 'Liability Release',
      page: '/liability',
      completed: user.onboarding.completed_liability_release,
    },
    {
      name: 'App Tutorial',
      page: '/tutorial',
      completed: user.onboarding.completed_app_tutorial,
    },
    {
      name: 'Food Safety Training',
      page: '/food-safety',
      completed: user.onboarding.completed_food_safety,
    },
  ]

  return (
    <main id="NewDriver">
      <Text type="secondary-header" color="white" shadow>
        Welcome to Sharing Excess!
      </Text>
      <Spacer height={8} />
      <Text type="paragraph" color="white" shadow>
        {user.name &&
        user.phone &&
        user.pronouns &&
        completed_availability &&
        user.availability &&
        user.driver_info.vehicle_make_model &&
        user.driver_info.license_number &&
        user.driver_info.license_state &&
        user.driver_info.insurance_policy_number &&
        user.driver_info.insurance_provider &&
        user.onboarding.completed_food_safety &&
        user.onboarding.completed_liability_release
          ? "You've completed all the onboarding steps!\n\nHang tight while we approve your info, and grant you permission to start rescuing food."
          : 'Complete the onboarding steps below to begin rescuing food as soon as possible.'}
      </Text>
      <Spacer height={16} />
      {sections.map(s => (
        <Link to={s.page} key={s.name}>
          <Card classList={['NewDriver-section', s.completed && 'completed']}>
            <i
              className={s.completed ? 'fa fa-check' : 'fa fa-clipboard-list'}
            />
            {s.name}
          </Card>
        </Link>
      ))}
    </main>
  )
}
