## Dispari

### Problema 

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.


### Soluzione 

- Creiamo una variabile per memorizzare la scelta del utente 
- Creiamo una variabile per controllare se il numero è valido 
- Creiamo una variabile per controllare se gli input inseriti sono validi 
- Mentre controlliamo se gli input sono validi 
   - Chiediamo all'utente di inserire tra pari e dispari
   - Se la scelta tra pari e dispari è valida
        - Chiediamo all'utente di inserire un valore da 1 a 5 
        -  Se il numero scelto è valido 
           - generiamo un numero casuale da a 1 a 5
           - Sommiamo l'Input e il numero casuale 
           - Controlliamo se la somma è pari 
           - Se l'utente ha scelto pari e la somma è pari o se ha scelto dispari e la somma è dispari
             - Ha vinto l'utente
           - Altrimenti 
             - Ha perso l'utente
        - Altrimenti 
           - Chiediamo all'utente di inserire un valore valido
   - Altrimenti 
       - Chiediamo all'utente di riprovare


