async function devour(id) {
  const fetchOptions = {
    headers: { 'Content-Type': 'application/json' },
    method: 'post'
  }
  const result = await fetch(`/api/burgers/${id}`, fetchOptions)
  location.reload()
}
