import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../Auth/Auth'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'
import Loading from '../Loading/Loading'
import { Input } from '../Input/Input'
import useUserData from '../../hooks/useUserData'
import Header from '../Header/Header'
import './Profile.scss'
import validator from 'validator'

export default function Profile() {
  const { user } = useAuthContext()
  const profile = useUserData(user.uid)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pronouns: '',
  })
  const [button, setButton] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    // update formData only once by checking name population
    if (!button && !formData.name && profile && profile.name) {
      setFormData({
        name: profile.name,
        phone: profile.phone || '',
        pronouns: profile.pronouns || '',
      })
    }
  }, [profile, formData, button])

  function validateInformation() {
    if (!formData.name) {
      setError("Please enter your Profile's Name")
      return false
    } else if (!validator.isMobilePhone(formData.phone)) {
      setError(
        'Your phone may contain invalid characters or missing some digits'
      )
      return false
    }
    return true
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value })
    setButton('update profile')
  }

  function handleUpdate() {
    console.log('Profile >>>', profile)
    if (validateInformation()) {
      firebase
        .firestore()
        .collection('Users')
        .doc(user.uid)
        .set(formData, { merge: true })
        .then(() => {
          setButton('profile updated!')
          setTimeout(() => setButton(), 2000)
          setError()
        })
        .catch(e => console.error('Error updating profile: ', e))
    } else {
      setTimeout(() => setError(), 4000)
    }
  }

  return !profile ? (
    <Loading text="Loading profile" />
  ) : (
    <main id="Profile">
      <Header text="Profile" />
      <img src={profile.icon} alt={profile.name} />
      <h3>{profile.email}</h3>
      <button>
        {' '}
        <Link to="/liability">View Signed Document</Link>
      </button>
      <Input
        element_id="name"
        label="Display Name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        element_id="pronouns"
        label="Personal Pronouns"
        value={formData.pronouns}
        onChange={handleChange}
      />
      <Input
        element_id="phone"
        label="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      {button && (
        <button onClick={handleUpdate} disabled={button !== 'update profile'}>
          {button}
        </button>
      )}
      {error && <p id="FormError">{error}</p>}
    </main>
  )
}
