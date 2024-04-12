const date = Variable('', {
    poll: [1000,'date']
})
function Bar(monitor){
    return Widget.Window({
        monitor,
        name: `bar${monitor}`,
        anchor: ['top','left','right'],
        child:Widget.Label({label:date.bind()})
        
    })
}
App.config({windows:[
    Bar(0),
    Bar(1),
]})