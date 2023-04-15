'use client'
import { Container } from '@mantine/core'
import {
  AdvantageSection,
  ClientReceive,
  Clients,
  EventCountdown,
  Hero,
  NewEvents,
  Packages,
  ProjectReport,
  Testimony,
} from '@sipilot/components/Sections'
import { useMemo } from 'react'
import { Event, HomeData } from 'types/res'
import Navbar from './navbar'

interface Props {
  data: HomeData
  events: Event[]
  upcomingEvent: Event
}
function Content(props: Props) {
  const { data, events, upcomingEvent } = props

  const heroData = useMemo(() => {
    return data?.['1']
  }, [data])

  const trustedData1 = useMemo(() => {
    return data?.['2']
  }, [data])

  const trustedData2 = useMemo(() => {
    return data?.['3']
  }, [data])

  const clientReview = useMemo(() => {
    return data?.['5']
  }, [data])

  return (
    <div>
      <Navbar />
      <Hero data={heroData} />
      <Container id="advantage">
        <AdvantageSection data={trustedData1} />
        <AdvantageSection data={trustedData2} reverse />
      </Container>

      <EventCountdown event={upcomingEvent} />

      <ProjectReport />
      <ClientReceive />
      <NewEvents events={events} />
      <Packages />
      <Testimony data={clientReview} />
      <Clients />
    </div>
  )
}

export default Content
