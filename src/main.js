{
	
    console.log('Exercício 1 ---------------');
    const collaborators = [
        { name: 'João', age: 23, company: 'Voalle Services' },
        { name: 'Samuel', age: 17, company: 'Voalle Finances' },
        { name: 'Júlio', age: 16, company: 'Syntesis IT' },
        { name: 'Thiago', age: 32, company: 'Voalle Services' },
        { name: 'Caio', age: 18, company: 'Voalle Services' },
        { name: 'Raissa', age: 25, company: 'Voalle Finances' },
        { name: 'Fábio', age: 17, company: 'Voalle Services' },
        { name: 'Carmen', age: 48, company: 'Voalle Assessoria' },
        { name: 'Giovana', age: 27, company: 'Syntesis IT' },
    ]
    console.log(collaborators)

    const collaboratorsNames = collaborators.map(({ name }) => name)
    console.log('1: ', collaboratorsNames);

    const collaboratorsFilter = collaborators.filter(({ age, company }) => (age >= 18 && company === 'Voalle Services'))
    console.log('2: ', collaboratorsFilter)

    const collaboratorCompany = collaborators.find(({ company }) => company === 'Voalle Assessoria')
    console.log('3: ', collaboratorCompany)
	
}


{

    console.log('Exercício 2 ---------------');

    const arr = [1, 2, 3, 4, 5]
    console.log(arr);

    const a = arr.map(value => value * 11)
    console.log('1: ', a);


    const user = { name: 'João', age: 23 }
    const showName = (({ name }) => name)

    console.log('2: ', showName(user));
	
}


{
	
    console.log('Exercício 3 ---------------');
    const company = {
        name: 'Voalle Services',
        address: {
            street: 'Rua Francisco Crosseti',
            number: '369',
            city: 'Santa Maria',
            state: 'RS'
        }
    }

    const { name, address: { city, state } } = company;

    console.log(name, city, state);

}


{
	
    console.log('Exercício 4 ---------------');

    const user = {
        name: 'João',
        age: 23,
        address: {
            city: 'Santa Maria',
            stte: 'RS',
            country: 'Brasil'
        }
    }

    const { name, ...rest } = user
    console.log('1: ', name, rest);

    const user2 = { ...user, name: 'Gabriel' }
    console.log('2: ', user2);

    const user3 = { ...user, address: { ...user.address, city: 'Porto Alegre' } }
    console.log('3: ', user3);

}


{
	
    console.log('Exercício 5 ---------------');

    const name = 'João'
    const age = 24

    const user = { name, age }
    console.log(`O usuário ${user.name} possui ${user.age} anos`);

}