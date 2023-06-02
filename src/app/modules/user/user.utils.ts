import User from './user.model'

//find user by createdId on mongoose and sort it in descending order
export const findLastUserID = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generateUserID = async () => {
  const currentId = (await findLastUserID()) || (0).toString().padStart(5, '0')

  //increment by 1
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId
}
