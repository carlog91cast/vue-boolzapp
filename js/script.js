let vue = new Vue(
    {
        el: "#root",
        data: {
            clickedElement: 0,
            newMessage: "",
            searchFilter: "",
            lastAccess: moment().format('HH:mm'),
            showMenu: false,
            dropMenu: 0,

            user: {
                name: "Sofia",
                avatar: "_io"
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Sono ubriaco fradicio',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'lo sai che sono celiaca',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'no, mi sta antipatica',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'E invece si!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        },
        methods: {
            setClickedElement(index) {
                this.clickedElement = index;
            },
            sendNewMessage() {
                if (this.newMessage.length > 0) {
                    this.contacts[this.clickedElement].messages.push(
                        {
                            date: moment().format('HH:mm'),
                            message: this.newMessage,
                            status: 'sent'
                        }
                    );
                    this.setTime()
                    // svuoto la casella testo
                    this.newMessage = "";
                    const element = document.getElementById("chat-window");
                    element.scrollIntoView({behavior: "smooth", block: "end"});

                }

            },
            receivedNewMessage() {
                this.contacts[this.clickedElement].messages.push(
                    {
                        date: moment().format('HH:mm'),
                        message: 'smettila di alimentare le tue frustrazioni creando un intelligenza artificiale che interagisca con te, confezionando risposte adatte solo per trovar conforto per il tuo ego ferito',
                        status: 'received'
                    }
                );
            },
            setTime() {
                setTimeout(() => {
                    this.receivedNewMessage()
                }
                    , 2000);
            },

            // milestone 4: creo una funzione con for each per ogni elemento dell'arrau che ha le stesse lettere del nome ricercato
            filterName() {
                // per ogni elemento di contacts, se ha le stesse
                // lettere, il contatto saraà visible altrimenti scompare
                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().includes(this.searchFilter.toLowerCase())) {
                        element.visible = true;
                        console.log(element);
                    } else {
                        element.visible = false;
                    }

                });
            },
            // al click sullo chevron mostro il drop-menu
            dropDownOn(index){
                this.showMenu = !this.showMenu;
                this.dropMenu = index;
            },
            // riclicco e la tendina scompare
            dropDownOff(){
                this.showMenu = false
                this.dropMenu = 0;
            },
            // funzione che rimuove il messaggio
            deleteMessage(index){
                this.contacts[this.clickedElement].messages.splice(index,1);
            }
        }
    })
