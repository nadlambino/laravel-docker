import * as Validator from 'validatorjs';

export const validator = {
    methods: {
        validateForm(data, rules) {
            const validator = new Validator(data, rules);
            if (validator.passes()) {
                return {
                    success : true,
                    message : []
                }
            }
            return {
                success : false,
                message : validator.errors.all()
            }
        }
    }
}