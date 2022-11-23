export const validationSchema = {
    email: {
        isRequired: {
            message: 'Электронная почта обязательна для заполнения'
        },
        isEmail: {
            message: 'Email введён некорректно'
        }
    },
    link: {
        isRequired: {
            message: 'Ссылка обязательна для заполнения'
        },
        isUrl: {
            message: 'Адрес не корректный'
        }
    },
    description: {
        isRequired: {
            message: 'Описание обязательно для заполнения'
        },
        min: {
            message: 'Описание должно содердать минимум 20 символов',
            param: 20
        }
    }
}
