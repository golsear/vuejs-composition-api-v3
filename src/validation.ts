interface Status {
    valid: boolean
    message?: string
}

type Rule = (value: string) => Status

export function length ({ min, max }: { min: number, max: number }) {
    return function (value: string): Status {
        const result = Boolean(value.length > min && value.length < max)

        return {
            valid: result,
            message: result ? undefined : `This fields must be between ${min} and ${max}` 
        }
    }
}

export function required (value: string): Status {
    const result = Boolean(value)

    return {
        valid: result,
        message: result ? undefined : 'This fields is required' 
    }
}

export function validate (value: string, rules: Rule[]): Status {
    for (const rule of rules) {
        const result = rule(value)

        if (!result.valid) {
            return result
        }
    }

    return {
        valid: true
    }
}

console.log(
    validate('a', [length({ min: 5, max: 10 })]),
    validate('aaaaaaa', [length({ min: 5, max: 10 })]),
    validate('aaaaaaaaaaa', [length({ min: 5, max: 10 })])
)