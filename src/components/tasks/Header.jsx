import { useDate } from '../../hooks/useDate'

const addZero = (time) => time < 10 ? '0' + time : time

export const Header = ({ user }) => {
  const date = useDate()
  return (
    <>
      <h2>Hola <span>{user}</span>!</h2>
      {date && (
        <p>{`${date.day}, ${date.number} de ${date.month} - `}
          <span className='hour'>{` ${addZero(date.hour)}:${addZero(date.minutes)}`}</span>
        </p>
      )}
    </>
  )
}
