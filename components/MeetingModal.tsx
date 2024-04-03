import React, { ReactNode } from 'react'

interface MeetingModalProps {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    className?: string,
    buttontext?: string,
    handleClick?: () => void,
    image?: string,
    buttonIcon?: string,
    children?: ReactNode
}

const MeetingModal = ({ isOpen, onClose, title, className, children, buttontext, handleClick, image, buttonIcon}: MeetingModalProps) => {
  return (
    <div>MeetingModal</div>
  )
}

export default MeetingModal