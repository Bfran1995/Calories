// ? operador ternario 

/*
const pointUser = 99;
if (pointUser >= 1000) {
console.log ('VIP User');

} else {+
    console.log('Nomal User')
}


*/
// mesma coisa de usar if and else
const pointUser = 1001;
const levelUser = pointUser >= 1000 ? 'VIP User' : 'Nomal User';
console.log(levelUser);

const useColor = null;
const defaultColor = useColor || 'Black';



/*
Operadores logicos
&& -> AND
|| -> OR
!  -> NOT
*/