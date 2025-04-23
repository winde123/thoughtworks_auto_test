export function makeid() {
    let promo_code_char_arr = [];
    const numeric_code_arr = [];
    // generating the first 3 random integer
    let counter_int = 0
    while (counter_int<3){
        let random_int = Math.floor(Math.random() * 10);
        numeric_code_arr.push(random_int)
        counter_int += 1
    }
    const sum = numeric_code_arr.reduce((partialSum, a) => partialSum + a, 0)

    const checksum = sum % 10
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 6) {
        promo_code_char_arr.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        counter += 1;
    }

    //adding the intergers into promo code array
    promo_code_char_arr[2] = numeric_code_arr[0]
    let promo_code_char_num_arr = [...promo_code_char_arr,numeric_code_arr[1],numeric_code_arr[2],checksum]

    //adding the - sign for every 3rd index
    const promo_code_char_str_arr = []

    for (let i = 0; i < promo_code_char_num_arr.length; i++){
        promo_code_char_str_arr.push(promo_code_char_num_arr[i])
        if ((i+1) % 3 === 0){
            promo_code_char_str_arr.push('-')
        }
    }
    //removing the last elem
     let promo_code_char_str_pop_arr = promo_code_char_str_arr.pop();
     let promo_code_char_str = '';
    // creating an accumulator function for reward string
     for (let i = 0; i < promo_code_char_str_arr.length; i++){
        promo_code_char_str += promo_code_char_str_arr[i]
        
    }


    return promo_code_char_str;
}

//export default  { makeid };
//console.log(makeid())