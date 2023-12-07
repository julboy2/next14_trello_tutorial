'use client'

import { Button } from '@/components/ui/button'
import { Board } from '@prisma/client'
import { useState } from 'react'

interface BoardTitleFormProps {
  data: Board
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const enableEditing = () => {
    // TODO: Focus inputs
    setIsEditing(true)
  }

  const disableEditing = () => {
    setIsEditing(false)
  }

  return (
    <Button
      onClick={enableEditing}
      variant={'transparent'}
      className="font-bole text-lg h-auto w-auto p-1 px-2"
    >
      {data.title}
    </Button>
  )
}
