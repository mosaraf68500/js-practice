const numbers=[87,23,123,56,87,98];

function max(numbers){
    let maxValue=numbers[0];
    for(const num of numbers){
        if(num>maxValue){
            maxValue=num;
        }
    }
    return maxValue
}

const maxNumber=max(numbers);
console.log(maxNumber)