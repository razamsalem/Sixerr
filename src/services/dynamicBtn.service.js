
export const dynamicService = {
    getById
}

async function getById() {
    return filterBtns
    return survey
}

const filterBtns = [{
    title: 'Service options',
},
{
    title: 'Seller details',
},
{
    title: 'Budget',
},
{
    title: 'Delivery time',
},
]

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