import { StudentsContext } from "../context/StudentsContext"
import { useContext } from "react"

export const useStudentsContext = () => {
  const context = useContext(StudentsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an StudentsContextProvider')
  }

  return context
}
