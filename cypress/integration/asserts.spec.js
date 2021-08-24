/// <reference types="cypress" />

it('Equality', () => {
    const a = 1

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect(a).not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2,
    }
    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b: 2 }) // deep é para verificar as propriedades do obj
    expect(obj).eql({ a: 1, b: 2 }) // forma abreviada do deep
    expect(obj).include({ a: 1 }) // verifica se dentro do obj tem a propriedade a:1
    expect(obj).to.be.property('b') // verifica a propriedade b
    expect(obj).to.be.property('b', 2) // verifica a propriedade b e o valor dela
    expect(obj).to.be.not.empty // verifica o obj não está vazio
    expect({}).to.be.empty // verifica o obj está vazio
})

it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.have.include.members([1, 2])
    expect(arr).to.be.not.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/) // verifiar se existe essa string
    expect(str).to.match(/^String/) // verificar se inicia com String
    expect(str).to.match(/teste$/) // verificar se finaliza com teste
    expect(str).to.match(/.{15}/) // verificar tamanho
    expect(str).to.match(/\w+/) // verificar se exitem apenas letras
    expect(str).to.match(/\D+/) // verificar se não tem números
})

it('Numbers', () => {
    const number = 4
    const floarNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) // se o número é maior que três
    expect(number).to.be.below(7) // se o número é menor que sete
    expect(floarNumber).to.be.equal(5.2123)
    expect(floarNumber).to.be.closeTo(5.2, 0.1) // se o número é prôximo com a precisão de 0.1
})