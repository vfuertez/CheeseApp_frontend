import {redirect} from 'react-router-dom'

const URL = 'https://cheeseapp-api-55ex.onrender.com'

const formData = await requestAnimationFrame.formData()

const newCheese = {
    name: formData.get('name'),
    image: formData.get('image'),
    type:formData.get('type')
}

await fetch(URL + '/cheese', {
    method: 'post',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(newCheese)
})

return redirect('/')