const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {expect, assert} = require("chai");



describe('creating fake DOM', function () {
    before(function() {
      return JSDOM.fromFile('./index.html')
        .then((dom) => {
          global.window = dom.window;
          global.document = window.document;
        });
    })
    describe('test1', () => {
      it ('check inner html for user', function () {
          expect(document.getElementById('user-selection').innerHTML).to.equal('Player Selection');
        });
        it ('check inner html for bot', function () {
            expect(document.getElementById('bot-selection').innerHTML).to.equal('Coumputer Selection');
          });


          

    
          it('should return rock', function(){
            const app = require('../script');
            app.rock();
            let userSelection = document.getElementById('user-selection').innerHTML;
            expect(userSelection).to.equal('Player : rock');
      })
        
        it('should return paper', function(){
          const app = require('../script');
          app.paper();
          let userSelection = document.getElementById('user-selection').innerHTML;
          expect(userSelection).to.equal('Player : paper');
          //expect(userSelection).to.equal('Player : rock');
    })
    it('should return scissors', function(){
      const app = require('../script');
      app.scissors();
      //app.rock();
      let userSelection = document.getElementById('user-selection').innerHTML;
      expect(userSelection).to.equal('Player : scessors');
      //expect(userSelection).to.equal('Player : rock');
})

      it('should return aleart', function(){
      const app = require('../script');
      app.scissors();
      //app.rock();
      let userSelection = document.getElementById('user-selection').innerHTML;
      expect(userSelection).to.equal(userSelection);
     
})
//unknown random values
it('should return score', function(){
  const app = require('../script');
  app.scissors();
  app.rock();
  let userSelection = document.getElementById('Uscore').innerHTML;
  console.log(userSelection);
})
    })
  });
