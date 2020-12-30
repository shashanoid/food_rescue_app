import React, { useEffect, useState } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { useHistory, useParams } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './Report.scss'
import Spacer from '../Spacer/Spacer'
import Loading from '../Loading/Loading'
import { GoBack } from '../../helpers/components'

export default function Report() {
  const { id } = useParams()
  const history = useHistory()
  const [rescue = {}, loading] = useDocumentData(
    firebase.firestore().collection('Rescues').doc(id)
  )
  const [pickup_org = {}] = useDocumentData(
    firebase.firestore().collection('Organizations').doc(rescue.pickup_org_id)
  )
  const [delivery_org = {}] = useDocumentData(
    firebase.firestore().collection('Organizations').doc(rescue.delivery_org_id)
  )
  const [formData, setFormData] = useState({
    dairy: 0,
    bakery: 0,
    produce: 0,
    'meat/Fish': 0,
    'non-perishable': 0,
    'prepared/Frozen': 0,
    other: 0,
    weight: 0,
  })
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    rescue.report
      ? setFormData(formData => ({ ...formData, ...rescue.report }))
      : setChanged(true)
  }, [rescue.report])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value })
    setChanged(true)
  }

  function increment(field) {
    setFormData({ ...formData, [field]: formData[field] + 1 })
    setChanged(true)
  }

  function decrement(field) {
    setFormData({ ...formData, [field]: Math.max(0, formData[field] - 1) })
    setChanged(true)
  }

  function handleSubmit(event) {
    event.preventDefault()
    firebase
      .firestore()
      .collection('Rescues')
      .doc(id)
      .set(
        {
          report: {
            dairy: parseInt(formData.dairy),
            bakery: parseInt(formData.bakery),
            produce: parseInt(formData.produce),
            'meat/Fish': parseInt(formData['meat/Fish']),
            'non-perishable': parseInt(formData['non-perishable']),
            'prepared/Frozen': parseInt(formData['prepared/Frozen']),
            other: parseInt(formData.other),
            weight: parseInt(formData.weight),
          },
          status: Math.max(rescue.status, 6),
        },
        { merge: true }
      )
      .then(() => history.push(`/rescues/${id}`))
      .catch(e => console.error('Error writing document: ', e))
  }
  if (loading) return <Loading text="Loading report" />
  return (
    <main id="Report">
      <GoBack url={`/rescues/${id}`} label="back to rescue" />
      <h1>Rescue Report</h1>
      <h3>
        {pickup_org.name} <Spacer direction="horizontal" /> {delivery_org.name}
      </h3>
      {Object.keys(formData)
        .sort()
        .map(field =>
          field !== 'weight' ? (
            <section key={field}>
              <h5>{field}</h5>
              <button className="decrement" onClick={() => decrement(field)}>
                -
              </button>
              <input
                readOnly
                id={field}
                type="tel"
                value={formData[field]}
                onChange={handleChange}
              />
              <button className="increment" onClick={() => increment(field)}>
                +
              </button>
            </section>
          ) : null
        )}
      <section className="weight">
        <h4>Total Weight (lbs.)</h4>
        <input
          id="weight"
          type="tel"
          value={formData.weight}
          onChange={handleChange}
        />
      </section>
      {changed ? (
        <button onClick={handleSubmit}>
          {rescue.report ? 'update report' : 'submit report'}
        </button>
      ) : null}
    </main>
  )
}
