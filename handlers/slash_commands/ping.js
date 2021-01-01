module.exports = {
    name: 'ping',
    description: 'Pong!',
    options: [{
        "name": "test",
        "description": "tesssst",
        "type": 3
    }],
    content: 'Pong!',
    async run(int, args) {
        if(args != null) {
            if(args[0] == 'test') console.log('Hi!');
            return;
        }
        console.log('Hello!');
    }
}