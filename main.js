let scelta;

do{
    scelta = Number(prompt(` Inserisci il numero della bevanda:\n 1 - acqua \n 2 - coca cola \n 3 - birra `));

    switch (scelta) {
        case 1:
            console.log(`E' stata selezionata l'acqua`);
            break;
            case 2:
            console.log(`E' stata selezionata coca cola`);
            break;
            case 3:
            console.log(`E' stata selezionata la birra`);
            break;

        default:
            scelta = 0;
            console.log(`La scelta inserita non è valida, devi inserire il numero corretto!`);
            
    }

      }while (scelta < 1 || scelta > 3) {

        
    }
    


// let scelta ;

// let bevanda;

// do{
//     scelta = prompt(` Inserisci la bevanda desiderata:\n acqua \n coca cola \n birra `);


//     switch (scelta) {
//         case bevanda = `acqua`:
//             console.log(`E' stata selezionata l'acqua`);
//             break;
            
//         case bevanda = `coca cola`:
//             console.log(`E' stata selezionata coca cola`);
//             break;

//         case bevanda = `birra`:
//             console.log(`E' stata selezionata la birra`);
//             break;

//         default:
//             console.log(`La scelta inserita non è valida, inserisci la bevanda corretta!`);
            
//     }

//  }while (scelta != bevanda) {
    
//  } 
 
 








