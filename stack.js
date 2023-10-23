const arr=[];
var readline =require('readline-sync');
max_size=10;
stack_top=arr.length;
console.log(max_size);

do{var choice = readline.question('1 enter for push \n2 enter for pop\n ---------');
switch(choice){
    case '1':
        push_function();
        break;
    case '2':
        Pop_function(); 
        break;
    default:
        console.log("invalid choice");
}
}while(true);
function push_function(){
    
    if(stack_top>=max_size){
        console.log('array is full u cannot add more elements to it');
    }
    else if(stack_top<max_size)
    {
        var element = readline.question('enter the element you want to push')
        arr[stack_top]=element;
        stack_top++;
    }
    else{
        console.log('invalide case')
    }
    console.log(arr);
    console.log(stack_top);
}
function Pop_function(){
    let arr2=[]
    if(stack_top<=0){
        console.log('array is empty you cannot delete ');
    }
    else if(stack_top<=max_size)
    {
        console.log(stack_top);
        stack_top=stack_top-1;
        console.log(stack_top);
        for(i=0;i<stack_top;i++){
            arr2.push(arr[i])
        }
        console.log(arr2);
        //console.log("array after poping "+arr)
    }
    else{
        console.log('invalide case')
    }
    //console.log(arr);
    //console.log(stack_top);
}

