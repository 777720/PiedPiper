import moment from 'moment'

const timeFormat = (str, template) => {
  const formatTime = moment(str).format(template)
  return formatTime
}

export default timeFormat