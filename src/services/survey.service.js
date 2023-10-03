
export const surveyService = {
    getById
}

async function getById() {
    return survey
}

const survey = {
    title: 'Robots Shopping',
    cmps: [
        {
            type: 'TextBox',
            id: 'c101',
            info: {
                label: 'Your fullname:'
            }
        },
        {
            type: 'SelectBox',
            id: 'c102',
            info: {
                label: 'How was it:',
                opts: ['Great', 'Fine', 'Crap', 'Worst Ever']
            }
        }
    ]
}