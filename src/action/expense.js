export const updateFieldDetail = ({day = '', time = ''} = {}) => ({
  type: 'UPDATE_FIELD',
  day,
  time
})
