function addLargeNumber (a, b){
    let i = a.length - 1, 
        j = b.length - 1; 
    let x = 0, y = 0;
    let carry = 0;
    let sum = 0;
    let result = '';

    while(i >= 0 || j >= 0){
        x = 0;
        y = 0;
        if(i >= 0){
            x = a[i] - '0';
            i--;
        }
        if(j >= 0){
            y = b[j] - '0';
            j--;
        }

        sum = x + y + carry;

        if(sum >= 10){
            carry = 1;
            sum -= 10;
        }else{
            carry = 0;
        }

        result = sum + result;
    }

    if(carry > 0){
        result = carry + result;
    }
    return result;
}