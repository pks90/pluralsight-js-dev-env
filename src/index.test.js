import {expect} from 'chai'
import { JSDOM } from 'jsdom'

describe('Our first test', () => { // eslint-disable-line
  it('should pass', () => { // eslint-disable-line
    expect(true).to.equal(true)
  })
})

describe('index.html', () => { // eslint-disable-line
  it('should have a header that says Users' , (done) => { // eslint-disable-line
    const options = { }
    JSDOM.fromFile('./src/index.html', options).then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('Users')
      done()
    }).catch((done))
  })
})
