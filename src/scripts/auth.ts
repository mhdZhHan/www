import { actions, isInputError } from "astro:actions"

const authForm = document.querySelector("#authForm") as HTMLFormElement

authForm?.addEventListener("submit", async (event) => {
	event.preventDefault()
	const formData = new FormData(authForm)
	const formType = formData.get("formType") as string

	console.log(formData)

	if (formType === "Signup") {
		// passing the form data to createAccount action
		const { error, data } = await actions.createAccount.safe(formData)

		if (error) {
			// handle error (future)
			console.log(error)
			if (isInputError(error)) {
				console.log(error.fields)
			}
			return
		}

		window.location.reload()
	} else if (formType === "Sign In") {
	}
})
