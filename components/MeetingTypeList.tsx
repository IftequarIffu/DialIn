'use client'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'

const MeetingTypeList = () => {

    const [meetingState, setMeetingState] = useState<"isJoiningMeeting" | "isSchedulingMeeting" | "isInstantMeeting" | undefined>();
    const router = useRouter()

    const createMeeting = () => {
        
    }

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>

        <HomeCard iconLink="/icons/add-meeting.svg" color="bg-orange-1" title="New meeting" description="Start an instant meeting" handleClick={() => setMeetingState("isJoiningMeeting")} />
        <HomeCard iconLink="/icons/schedule.svg" color="bg-purple-1" title="Schedule meeting" description="Plan your meeting" handleClick={() => setMeetingState("isSchedulingMeeting")} />
        <HomeCard iconLink="/icons/recordings.svg" color="bg-blue-1" title="View Recordings" description="Checkout your recordings" handleClick={() => router.push("/recordings")} />
        <HomeCard iconLink="/icons/join-meeting.svg" color="bg-yellow-1" title="Join meeting" description="via invitation link" handleClick={() => setMeetingState("isJoiningMeeting")} />

        <MeetingModal isOpen={meetingState === "isInstantMeeting"} onClose={() => setMeetingState(undefined)} title="Start an Instant Meeting" className="text-center" buttonText="Start Meeting" handleClick={() => createMeeting()}/>
    </section>
  )
}

export default MeetingTypeList