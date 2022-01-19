export default class PasswordSchema{
    static schema = {
        name: "Password",
        primaryKey: "id",
        properties: {
            id: {type: 'int', indexed: true},
            name: 'string',
            description: 'string',
            user: 'string', 
            password: 'string',
        }
    }
}