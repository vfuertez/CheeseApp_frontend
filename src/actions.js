import { redirect } from 'react-router-dom'

const URL = 'https://cheeseapp-api-55ex.onrender.com'

export const createAction = async ({ request }) => {
  const formData = await request.formData()

  const newCheese = {
    name: formData.get('name'),
    image: formData.get('image'),
    type: formData.get('type'),
  }

  await fetch(URL + '/cheese', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCheese),
  })

  return redirect('/')
}

/// Update ///

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData()

  const cheeseUpdate = {
    name: formData.get('name'),
    image: formData.get('image'),
    title: formData.get('type'),
  }

  await fetch(URL + '/cheese/' + params.id, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cheeseUpdate),
  })

  return redirect('/')
}
