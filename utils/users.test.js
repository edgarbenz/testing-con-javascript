const axios = require('axios');
const User = require('./users');

jest.mock('axios');

describe('User class', () => {
  describe.skip('Without mocking...', () => {
    it('should fetch 10 users without mock', async() => {
      const users = await User.all();
      expect(users.length).toBe(10);
    });

    it('should fetch user[0].name to be Leanne Graham',async() => {
      const users = await User.all();
      expect(users[0].name).toBe('Leanne Graham');
    });
  });
  //****** */ FALSEANDO EL COMPORTAMIENTO **************
  describe('With mock =)', () => {
    
    beforeAll(() => {
      const users = [{name: 'Damian'},{name: 'Edgar'}];
      const response = {data: users};
      axios.get.mockResolvedValue(response);
    });

    describe('User.all()', () => {
      it.skip('should fetch listOfUsers[0].name to be Maripili', async() => {
        const listOfUsers = await User.all();
        expect(listOfUsers[0].name).toBe('Damian');
      });
  
      it('should point to endpoint /users ', async () => {
        const listOfUsers = await User.all();
        console.log('listOfUsers: ',listOfUsers)
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
        //Axios.get este siendo llamado con esa URL
        //PERO al regresar la info es cuando entra el mock y manda lo que le pusimos nosotros
      })

      it('should create a new user', async () => {
        axios.post.mockResolvedValue({data: {name: 'Edgar'}});
        const user =  await User.create({name: 'Edgar'});
        expect(user).toMatchObject({name: 'Edgar'})
      });
    });

  });
})