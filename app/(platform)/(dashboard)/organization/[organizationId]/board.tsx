import { deleteBoard } from '@/actions/delete-board'
import { FormDelete } from './form-delete'

interface BoardProps {
  title: string
  id: string
}

export function Board({ title, id }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id)

  return (
    <form action={deleteBoardWithId}>
      <p>Board title : {title}</p>
      <FormDelete />
    </form>
  )
}
