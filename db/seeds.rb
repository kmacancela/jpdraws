User.destroy_all
Drawing.destroy_all
Transaction.destroy_all
User.reset_pk_sequence
Drawing.reset_pk_sequence
Transaction.reset_pk_sequence

ben = User.create(first_name: 'Benny', last_name: 'Louie', username: 'benben')
ben.password = 'benben'

karina = User.create(first_name: 'Karina', last_name: 'Macancela', username: 'macK')
karina.password = 'macK'

drawing1 = Drawing.create(name: 'Emotional Intelligence?', img: '/imgs/emotional-intelligence.jpg', price: 100, description: 'I\'m not tall enough?! I dare you to say that to my face! 😠 C\'mon! I DARE YOU!!!' )
drawing2 = Drawing.create(name: 'Gary Acid', img: '/imgs/gary-acid.jpg', price: 100, description: 'It wasn\'t me! I swear! Don\'t blame me for everything that goes wrong in your life! If I did it, I will admit. If I didn\'t... Don\'t even try and frame me!!! 😤')
drawing3 = Drawing.create(name: 'Get Ghosted!', img: '/imgs/get-ghosted.jpg', price: 100, description: 'Who \'dis? Sorry. The person you are looking for is not here at the moment. Plz leave a message after the beep... Beeeeeeeeeeeeeeeeeeeeeeeep!')
drawing4 = Drawing.create(name: 'Thread-o-Thread', img: '/imgs/thread-o-tread.jpg', price: 100, description: 'Clearly some dumbass doesn\'t know how to spell... T-H-R-E-A-D! Not, T-R-E-A-D! Learn English! 🤷‍♂️')
drawing5 = Drawing.create(name: 'Chav?', img: '/imgs/chav.jpg', price: 100, description: 'Stop doing your homework and help me with this game! I\'ve almost got this level beat! Just need a little support... Drop that pencil and pick up a console already! I haven\'t got all day!')
drawing6 = Drawing.create(name: 'Model Pains', img: '/imgs/model-pains.jpg', price: 100, description: 'I don\'t get paid enough for this shit...')
drawing7 = Drawing.create(name: 'Quit Instagram', img: '/imgs/quit-instagram.jpg', price: 100, description: 'Social Media is my life! I ain\'t giving it up for anybody! Much less you! Who da hell do you think you are?! You ain\'t my mother! 😤')
drawing8 = Drawing.create(name: 'Get Shrex\'d!', img: '/imgs/get-shrexd.jpg', price: 100, description: 'They say Shrekx\'d is life... No wait. Shrek is Life! ...But what about Puss-in-Boots? 🐈👢')
drawing9 = Drawing.create(name: 'Say What?!', img: '/imgs/say-what.jpg', price: 100, description: 'Shit I must\'ve heard her wrong... What\'d she say?! Hmm... Sorry, where\'s the nearest airport? Perfect! See ya! ✈️')
drawing10 = Drawing.create(name: 'Sir. Jfma Jason', img: '/imgs/jfma-jason.jpg', price: 100, description: 'Isn\'t he that newspaper guy from Spider-Man? You know... the old man who points at the screen and cries out, "Spider-Man is a Menace!" Right! J. Jonah. Jameson is his name! ... No? How could I be wrong? 😱')
drawing11 = Drawing.create(name: 'Baby Don\'t Hurt Me', img: '/imgs/baby-dont-hurt-me.jpg', price: 100, description: 'Yes... Guys can get pregnant too...It\'s a medical condition! Look it up! It\'s definitely NOT because of the Big Belly Burger and fifteen pound McDonald\'s I had last night or the 30 pound steak dinner I had the night before... Quit judging me! This will be you one day too! JUST WAIT FOR IT! 😤')
drawing12 = Drawing.create(name: 'Witch Spell', img: '/imgs/witch-spell.jpg', price: 100, description: 'Pour some water and melt this b*tch already... I mean... You\'re the nicest b*tch--- er... I mean, witch in town! Please help me... 🙏')

Transaction.create(user: ben, drawing: drawing1)
Transaction.create(user: karina, drawing: drawing2)
Transaction.create(user: ben, drawing: drawing3)
