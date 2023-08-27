import * as Yup from "yup"

const validations = Yup.object().shape({
    text: Yup.string().required("Bu alab boş bırakılamaz!")
})

export default validations