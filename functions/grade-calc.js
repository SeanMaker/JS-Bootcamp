let grade=function (total,score) {
    score_stu=score/total*100
    let letter_grade=''
    if (score_stu>=90){
        letter_grade='A'
    } else if(score_stu>=80){
        letter_grade='B'
    }else if(score_stu>=70){
        letter_grade='C'
    }else if(score_stu>=60){
        letter_grade='D'
    }
    else{
        letter_grade='F'
    }
    return `You got a ${letter_grade} (${score_stu}%)!`
}

let result=grade(100,66)
console.log(result)
