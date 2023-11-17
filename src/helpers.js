export const moneyFormat = mount => {
    return mount.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}